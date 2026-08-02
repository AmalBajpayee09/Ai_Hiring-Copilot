from fastapi import APIRouter

from app.schemas.candidate_request import CandidateRequest

from app.database.database import SessionLocal

from app.repositories.candidate_repository import CandidateRepository
from app.repositories.job_repository import JobRepository

from app.ai.interview import InterviewService

router = APIRouter(
    prefix="/candidate",
    tags=["Interview"],
)

interview_service = InterviewService()


@router.post("/interview")
def generate_interview(request: CandidateRequest):

    db = SessionLocal()

    try:

        candidate_repo = CandidateRepository(db)
        job_repo = JobRepository(db)

        candidate = candidate_repo.get_candidate_profile(
            request.candidate_id
        )

        if candidate is None:
            return {
                "success": False,
                "message": "Candidate not found",
            }

        job_description = job_repo.get_job_description(1)

        interview = interview_service.generate_interview(
            candidate,
            job_description,
        )

        return interview

    finally:
        db.close()