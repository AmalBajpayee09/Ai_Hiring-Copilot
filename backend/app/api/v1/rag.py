from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.repositories.candidate_repository import (
    CandidateRepository,
)

from app.schemas.rag_request import RAGRequest
from app.schemas.rag_response import RAGResponse

from app.rag.rag_service import RAGService

from app.cache.cache_service import CacheService


router = APIRouter(
    prefix="/api/v1/rag",
    tags=["RAG"],
)

cache = CacheService()


@router.post(
    "/ask",
    response_model=RAGResponse,
)
def ask_resume(

    request: RAGRequest,

    db: Session = Depends(get_db),

):

    candidate_repo = CandidateRepository(db)

    candidate = candidate_repo.get_candidate_by_id(
        request.candidate_id
    )

    if candidate is None:

        raise HTTPException(
            status_code=404,
            detail="Candidate not found.",
        )

    cache_key = (
        f"rag:{request.candidate_id}:{request.question.lower().strip()}"
    )

    cached = cache.get(cache_key)

    if cached is not None:

        print("=" * 80)
        print("✅ RAG Cache Hit")

        return RAGResponse(
            success=True,
            candidate_id=request.candidate_id,
            question=request.question,
            answer=cached,
        )

    print("=" * 80)
    print("❌ RAG Cache Miss")

    rag_service = RAGService()

    answer = rag_service.ask(
        candidate_id=request.candidate_id,
        question=request.question,
    )

    cache.set(
        cache_key,
        answer,
        ttl=3600,
    )

    return RAGResponse(
        success=True,
        candidate_id=request.candidate_id,
        question=request.question,
        answer=answer,
    )