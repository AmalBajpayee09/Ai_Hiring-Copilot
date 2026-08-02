from fastapi import APIRouter

from app.schemas.candidate_request import CandidateRequest
from app.database.database import SessionLocal
from app.repositories.candidate_repository import CandidateRepository
from app.repositories.job_repository import JobRepository
from app.ai.evaluation import EvaluationService

router = APIRouter(
    prefix="/candidate",
    tags=["Evaluation"],
)

evaluation_service = EvaluationService()


@router.post("/evaluate")
def evaluate_candidate(request: CandidateRequest):

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
                "message": "Candidate not found"
            }

        job_description = job_repo.get_job_description(1)

        result = evaluation_service.evaluate_candidate(
            candidate,
            job_description,
        )

        return result

    finally:
        db.close()