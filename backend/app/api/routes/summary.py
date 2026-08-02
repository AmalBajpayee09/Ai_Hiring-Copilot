from fastapi import APIRouter

from app.schemas.candidate_request import CandidateRequest

from app.database.database import SessionLocal

from app.repositories.candidate_repository import CandidateRepository

from app.ai.summary import ResumeSummaryService

router = APIRouter(
    prefix="/candidate",
    tags=["Summary"],
)

summary_service = ResumeSummaryService()


@router.post("/summary")
def resume_summary(request: CandidateRequest):

    db = SessionLocal()

    try:

        candidate_repo = CandidateRepository(db)

        candidate = candidate_repo.get_candidate_profile(
            request.candidate_id
        )

        if candidate is None:
            return {
                "success": False,
                "message": "Candidate not found",
            }

        summary = summary_service.generate_summary(
            candidate
        )

        return summary

    finally:
        db.close()