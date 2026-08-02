from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.ai.skill_gap import SkillGapService

from app.cache.cache_service import CacheService

from app.repositories.candidate_repository import (
    CandidateRepository,
)

from app.repositories.job_repository import (
    JobRepository,
)

from app.repositories.skill_gap_repository import (
    SkillGapRepository,
)

from app.schemas.skill_gap_request import (
    SkillGapRequest,
)

from app.schemas.skill_gap_response import (
    SkillGapResponse,
)

router = APIRouter(
    prefix="/api/v1/skill-gap",
    tags=["Skill Gap"],
)


@router.post(
    "/",
    response_model=SkillGapResponse,
)
def analyze_skill_gap(

    request: SkillGapRequest,

    db: Session = Depends(get_db),

):

    candidate_repo = CandidateRepository(db)

    job_repo = JobRepository(db)

    repository = SkillGapRepository(db)

    ai = SkillGapService()

    cache = CacheService()

    cache_key = (
        f"skillgap:{request.candidate_id}:{request.job_id}"
    )

    cached = cache.get(cache_key)

    if cached:

        print("=" * 80)
        print("✅ Skill Gap Cache Hit")

        return SkillGapResponse(

            success=True,

            candidate_id=request.candidate_id,

            job_id=request.job_id,

            analysis=cached,

        )

    print("=" * 80)
    print("❌ Skill Gap Cache Miss")

    candidate = candidate_repo.get_candidate_profile(
        request.candidate_id
    )

    if candidate is None:

        raise HTTPException(
            status_code=404,
            detail="Candidate not found.",
        )

    job_description = job_repo.get_job_description(
        request.job_id
    )

    if job_description is None:

        raise HTTPException(
            status_code=404,
            detail="Job not found.",
        )

    analysis = ai.analyze_skill_gap(

        candidate=candidate,

        job_description=job_description,

    )

    cache.set(

        cache_key,

        analysis.model_dump(),

        ttl=3600,

    )

    repository.create_skill_gap(

        candidate_id=request.candidate_id,

        job_id=request.job_id,

        analysis=analysis,

    )

    return SkillGapResponse(

        success=True,

        candidate_id=request.candidate_id,

        job_id=request.job_id,

        analysis=analysis,

    )