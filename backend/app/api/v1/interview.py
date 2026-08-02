from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.ai.interview import InterviewService

from app.cache.cache_service import CacheService

from app.repositories.candidate_repository import (
    CandidateRepository,
)

from app.repositories.job_repository import (
    JobRepository,
)

from app.repositories.interview_repository import (
    InterviewRepository,
)

from app.schemas.interview_request import (
    InterviewRequest,
)

from app.schemas.interview_response import (
    InterviewResponse,
    InterviewResult,
)

router = APIRouter(
    prefix="/api/v1/interview",
    tags=["Interview"],
)


@router.post(
    "/",
    response_model=InterviewResponse,
)
def generate_interview(

    request: InterviewRequest,

    db: Session = Depends(get_db),

):

    candidate_repo = CandidateRepository(db)

    job_repo = JobRepository(db)

    interview_repo = InterviewRepository(db)

    interview_service = InterviewService()

    cache = CacheService()

    cache_key = (
        f"interview:{request.candidate_id}:{request.job_id}"
    )

    cached = cache.get(cache_key)

    if cached:

        print("=" * 80)
        print("✅ Interview Cache Hit")

        return InterviewResponse(

            success=True,

            candidate_id=request.candidate_id,

            job_id=request.job_id,

            technical_questions=cached["technical_questions"],

            hr_questions=cached["hr_questions"],

        )

    print("=" * 80)
    print("❌ Interview Cache Miss")

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

    interview: InterviewResult = (
        interview_service.generate_interview(
            candidate=candidate,
            job_description=job_description,
        )
    )

    cache.set(

        cache_key,

        interview.model_dump(),

        ttl=3600,

    )

    interview_repo.create_interview(

        candidate_id=request.candidate_id,

        job_id=request.job_id,

        technical_questions=[
            q.model_dump()
            for q in interview.technical_questions
        ],

        hr_questions=[
            q.model_dump()
            for q in interview.hr_questions
        ],
    )

    return InterviewResponse(

        success=True,

        candidate_id=request.candidate_id,

        job_id=request.job_id,

        technical_questions=interview.technical_questions,

        hr_questions=interview.hr_questions,

    )