from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.ai.summary import ResumeSummaryService

from app.cache.cache_service import CacheService

from app.repositories.candidate_repository import (
    CandidateRepository,
)

from app.repositories.resume_summary_repository import (
    ResumeSummaryRepository,
)

from app.schemas.resume_summary_request import (
    ResumeSummaryRequest,
)

from app.schemas.resume_summary_response import (
    ResumeSummaryResponse,
)

router = APIRouter(
    prefix="/api/v1/resume-summary",
    tags=["Resume Summary"],
)


@router.post(
    "/",
    response_model=ResumeSummaryResponse,
)
def generate_resume_summary(

    request: ResumeSummaryRequest,

    db: Session = Depends(get_db),

):

    candidate_repo = CandidateRepository(db)

    summary_repo = ResumeSummaryRepository(db)

    ai = ResumeSummaryService()

    cache = CacheService()

    cache_key = f"summary:{request.candidate_id}"

    cached = cache.get(cache_key)

    if cached:

        print("=" * 80)
        print("✅ Resume Summary Cache Hit")

        return ResumeSummaryResponse(

            success=True,

            candidate_id=request.candidate_id,

            summary=cached,

        )

    print("=" * 80)
    print("❌ Resume Summary Cache Miss")

    candidate = candidate_repo.get_candidate_profile(
        request.candidate_id
    )

    if candidate is None:

        raise HTTPException(
            status_code=404,
            detail="Candidate not found.",
        )

    summary = ai.generate_summary(
        candidate
    )

    cache.set(

        cache_key,

        summary.model_dump(),

        ttl=3600,

    )

    summary_repo.create_summary(

        candidate_id=request.candidate_id,

        summary=summary,

    )

    return ResumeSummaryResponse(

        success=True,

        candidate_id=request.candidate_id,

        summary=summary,

    )