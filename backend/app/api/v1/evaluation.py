from fastapi import APIRouter, HTTPException

from app.ai.ai_engine import AIEngine
from app.database.database import SessionLocal
from app.repositories.candidate_repository import CandidateRepository
from app.repositories.evaluation_repository import EvaluationRepository
from app.repositories.job_repository import JobRepository
from app.schemas.evaluation_history import EvaluationHistory
from app.schemas.evaluation_request import EvaluationRequest
from app.schemas.evaluation_response import EvaluationResponse

router = APIRouter(
    prefix="/api/v1/evaluation",
    tags=["Evaluation"],
)


@router.post(
    "/",
    response_model=EvaluationResponse,
)
def evaluate_candidate(
    request: EvaluationRequest,
):
    """
    Evaluate a candidate against a saved Job Description
    and store the evaluation in the database.
    """

    db = SessionLocal()

    try:
        # Candidate Repository
        candidate_repository = CandidateRepository(db)

        candidate = candidate_repository.get_candidate_profile(
            request.candidate_id
        )

        if candidate is None:
            raise HTTPException(
                status_code=404,
                detail="Candidate not found.",
            )

        # Job Repository
        job_repository = JobRepository(db)

        job_description = job_repository.get_job_description(
            request.job_id
        )

        if job_description is None:
            raise HTTPException(
                status_code=404,
                detail="Job not found.",
            )

        # AI Evaluation
        ai = AIEngine()

        evaluation = ai.evaluate_candidate(
            candidate,
            job_description,
        )

        # Save Evaluation
        evaluation_repository = EvaluationRepository(db)

        evaluation_repository.create_evaluation(
            candidate_id=request.candidate_id,
            job_description=job_description,
            evaluation=evaluation,
        )

        return EvaluationResponse(
            success=True,
            candidate_id=request.candidate_id,
            evaluation=evaluation,
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


@router.get(
    "/",
    response_model=list[EvaluationHistory],
)
def get_all_evaluations():

    db = SessionLocal()

    try:
        repository = EvaluationRepository(db)

        return repository.get_all_evaluations()

    finally:
        db.close()


@router.get(
    "/{evaluation_id}",
    response_model=EvaluationHistory,
)
def get_evaluation(
    evaluation_id: int,
):

    db = SessionLocal()

    try:
        repository = EvaluationRepository(db)

        evaluation = repository.get_evaluation_by_id(
            evaluation_id
        )

        if evaluation is None:
            raise HTTPException(
                status_code=404,
                detail="Evaluation not found.",
            )

        return evaluation

    finally:
        db.close()


@router.get(
    "/candidate/{candidate_id}",
    response_model=list[EvaluationHistory],
)
def get_candidate_history(
    candidate_id: int,
):

    db = SessionLocal()

    try:
        repository = EvaluationRepository(db)

        return repository.get_candidate_evaluations(
            candidate_id
        )

    finally:
        db.close()