from typing import List

from pydantic import BaseModel

from app.schemas.interview_schema import InterviewQuestion


class InterviewResult(BaseModel):
    technical_questions: List[InterviewQuestion]
    hr_questions: List[InterviewQuestion]


class InterviewResponse(BaseModel):
    success: bool
    candidate_id: int
    job_id: int

    technical_questions: List[InterviewQuestion]
    hr_questions: List[InterviewQuestion]