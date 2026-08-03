from app.schemas.candidate_schema import CandidateProfile
from pydantic import BaseModel


class ResumeUploadResponse(BaseModel):
    success: bool
    message: str

    resume_id: str
    filename: str

    text_length: int

    candidate_id: int          

    candidate: CandidateProfile