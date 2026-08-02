from fastapi import APIRouter

from app.schemas.candidate_request import CandidateRequest

from app.database.database import SessionLocal

from app.repositories.candidate_repository import CandidateRepository
from app.repositories.job_repository import JobRepository

from app.ai.skill_gap import SkillGapService

router = APIRouter(
    prefix="/candidate",
    tags=["Skill Gap"],
)

skill_gap_service = SkillGapService()


@router.post("/skill-gap")
def skill_gap(request: CandidateRequest):

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

        result = skill_gap_service.analyze_skill_gap(
            candidate,
            job_description,
        )

        return result

    finally:
        db.close()