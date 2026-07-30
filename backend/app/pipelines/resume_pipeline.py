from sqlalchemy.orm import Session

from app.ai.extraction import ExtractionService
from app.repositories.candidate_repository import CandidateRepository
from app.schemas.candidate_schema import CandidateProfile
from app.services.resume_service import ResumeService


class ResumePipeline:
    """
    Complete resume processing workflow.
    """

    def __init__(self, db: Session):
        self.resume_service = ResumeService()
        self.extraction_service = ExtractionService()
        self.repository = CandidateRepository(db)

    def process_resume(
        self,
        file_path: str,
    ) -> tuple[str, CandidateProfile]:

        # Extract text
        extracted_text = self.resume_service.extract_text(file_path)

        # AI Extraction
        candidate = self.extraction_service.extract_candidate(
        extracted_text
    )

        # Save Candidate
        self.repository.create_candidate(candidate)

        return extracted_text, candidate