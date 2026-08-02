from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.repositories.candidate_repository import (
    CandidateRepository,
)

from app.repositories.job_repository import (
    JobRepository,
)

from app.ai.summary import ResumeSummaryService
from app.ai.evaluation import EvaluationService
from app.ai.skill_gap import SkillGapService
from app.ai.interview import InterviewService
from app.ai.copilot import CopilotService

from app.rag.rag_service import RAGService

from app.schemas.copilot_request import (
    CopilotRequest,
)

from app.schemas.copilot_response import (
    CopilotResponse,
)

router = APIRouter(

    prefix="/api/v1/copilot",

    tags=["AI Copilot"],

)


@router.post(

    "/",

    response_model=CopilotResponse,

)

def generate_copilot(

    request: CopilotRequest,

    db: Session = Depends(get_db),

):

    candidate_repo = CandidateRepository(db)

    job_repo = JobRepository(db)

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

    summary_service = ResumeSummaryService()

    evaluation_service = EvaluationService()

    skill_gap_service = SkillGapService()

    interview_service = InterviewService()

    rag_service = RAGService()

    copilot_service = CopilotService()

    summary = summary_service.generate_summary(

        candidate

    )

    evaluation = evaluation_service.evaluate_candidate(

        candidate,

        job_description,

    )

    skill_gap = skill_gap_service.analyze_skill_gap(

        candidate,

        job_description,

    )

    interview = interview_service.generate_interview(

        candidate,

        job_description,

    )

    rag = rag_service.ask(

        candidate_id=request.candidate_id,

        question="Give complete resume context",

    )

    decision = copilot_service.generate_decision(

        summary=summary.model_dump_json(),

        evaluation=evaluation.model_dump_json(),

        skill_gap=skill_gap.model_dump_json(),

        interview=interview.model_dump_json(),

        rag=rag,

    )

    return decision