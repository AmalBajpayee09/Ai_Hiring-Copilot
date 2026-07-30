from fastapi import APIRouter, HTTPException

from app.ai.interview import InterviewService
from app.database.database import SessionLocal

from app.repositories.candidate_repository import CandidateRepository
from app.repositories.job_repository import JobRepository
from app.repositories.interview_repository import InterviewRepository

from app.schemas.interview_request import InterviewRequest
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
):

    db = SessionLocal()

    try:

        # Candidate
        candidate_repository = CandidateRepository(db)

        candidate = candidate_repository.get_candidate_profile(
            request.candidate_id
        )

        if candidate is None:
            raise HTTPException(
                status_code=404,
                detail="Candidate not found.",
            )

        # Job
        job_repository = JobRepository(db)

        job_description = job_repository.get_job_description(
            request.job_id
        )

        if job_description is None:
            raise HTTPException(
                status_code=404,
                detail="Job not found.",
            )

        # AI Interview
        interview_service = InterviewService()

        interview: InterviewResult = (
            interview_service.generate_interview(
                candidate=candidate,
                job_description=job_description,
            )
        )

        # Save
        interview_repository = InterviewRepository(db)

        interview_repository.create_interview(
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

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )

    finally:
        db.close()