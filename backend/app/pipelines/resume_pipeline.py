from sqlalchemy.orm import Session

from app.ai.extraction import ExtractionService
from app.repositories.candidate_repository import CandidateRepository
from app.schemas.candidate_schema import CandidateProfile
from app.services.resume_service import ResumeService

from app.rag.chunker import ResumeChunker
from app.rag.embeddings import EmbeddingService
from app.rag.vector_store import VectorStore


class ResumePipeline:
    """
    Complete resume processing workflow.
    """

    def __init__(
        self,
        db: Session,
    ):

        self.resume_service = ResumeService()

        self.extraction_service = ExtractionService()

        self.repository = CandidateRepository(db)

        self.chunker = ResumeChunker()

        self.embedder = EmbeddingService()

        self.vector_store = VectorStore()

    def process_resume(
        self,
        file_path: str,
    ) -> tuple[str, CandidateProfile]:

        # Extract Resume Text

        extracted_text = self.resume_service.extract_text(
            file_path
        )

        # AI Extraction

        candidate = self.extraction_service.extract_candidate(
            extracted_text
        )

        # Save Candidate

        db_candidate = self.repository.create_candidate(
            candidate
        )

        # ---------- RAG ----------

        chunks = self.chunker.split(
            extracted_text
        )

        embeddings = self.embedder.encode(
            chunks
        )

        self.vector_store.create_index(

            candidate_id=db_candidate.id,

            embeddings=embeddings,

            chunks=chunks,

        )

        return extracted_text, candidate