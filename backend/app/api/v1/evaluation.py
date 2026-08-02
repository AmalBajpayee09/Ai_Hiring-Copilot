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

from app.repositories.evaluation_repository import (
    EvaluationRepository,
)

from app.ai.evaluation import (
    EvaluationService,
)

from app.cache.cache_service import (
    CacheService,
)

from app.schemas.evaluation_request import (
    EvaluationRequest,
)

from app.schemas.evaluation_response import (
    EvaluationResponse,
)

from app.schemas.evaluation_history import (
    EvaluationHistory,
)

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

    db: Session = Depends(get_db),

):

    candidate_repo = CandidateRepository(db)

    job_repo = JobRepository(db)

    evaluation_repo = EvaluationRepository(db)

    evaluation_service = EvaluationService()

    cache = CacheService()

    cache_key = (
        f"evaluation:{request.candidate_id}:{request.job_id}"
    )

    cached = cache.get(cache_key)

    if cached:

        print("=" * 80)
        print("✅ Evaluation Cache Hit")

        return EvaluationResponse(

            success=True,

            candidate_id=request.candidate_id,

            evaluation=cached,

        )

    print("=" * 80)
    print("❌ Evaluation Cache Miss")

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

    evaluation = evaluation_service.evaluate_candidate(

        candidate,

        job_description,

    )

    cache.set(

        cache_key,

        evaluation.model_dump(),

        ttl=3600,

    )

    evaluation_repo.create_evaluation(

        candidate_id=request.candidate_id,

        job_description=job_description,

        evaluation=evaluation,

    )

    return EvaluationResponse(

        success=True,

        candidate_id=request.candidate_id,

        evaluation=evaluation,

    )


@router.get(
    "/",
    response_model=list[EvaluationHistory],
)
def get_all_evaluations(

    db: Session = Depends(get_db),

):

    repository = EvaluationRepository(db)

    return repository.get_all_evaluations()


@router.get(
    "/{evaluation_id}",
    response_model=EvaluationHistory,
)
def get_evaluation(

    evaluation_id: int,

    db: Session = Depends(get_db),

):

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


@router.get(
    "/candidate/{candidate_id}",
    response_model=list[EvaluationHistory],
)
def get_candidate_history(

    candidate_id: int,

    db: Session = Depends(get_db),

):

    repository = EvaluationRepository(db)

    return repository.get_candidate_evaluations(
        candidate_id
    )