from fastapi import APIRouter
from fastapi import HTTPException

from app.database.database import SessionLocal

from app.repositories.candidate_repository import CandidateRepository

from app.rag.chunker import ResumeChunker
from app.rag.embeddings import EmbeddingService
from app.rag.vector_store import VectorStore

router = APIRouter(
    prefix="/api/v1/index",
    tags=["Vector Index"],
)


@router.post("/{candidate_id}")
def generate_index(
    candidate_id: int,
):

    db = SessionLocal()

    try:

        repository = CandidateRepository(db)

        candidate = repository.get_candidate_by_id(
            candidate_id
        )

        if candidate is None:
            raise HTTPException(
                status_code=404,
                detail="Candidate not found.",
            )

        # Resume text from stored data
        resume_text = f"""
Summary:
{candidate.summary}

Skills:
{' '.join(candidate.skills)}

Projects:
{candidate.projects}

Experience:
{candidate.experience}

Education:
{candidate.education}
"""

        chunker = ResumeChunker()

        chunks = chunker.split(
            resume_text
        )

        embedder = EmbeddingService()

        embeddings = embedder.encode(
            chunks
        )

        store = VectorStore()

        store.create_index(
            candidate_id=candidate.id,
            embeddings=embeddings,
            chunks=chunks,
        )

        return {
            "success": True,
            "candidate_id": candidate.id,
            "chunks": len(chunks),
            "message": "Vector index created successfully."
        }

    finally:
        db.close()