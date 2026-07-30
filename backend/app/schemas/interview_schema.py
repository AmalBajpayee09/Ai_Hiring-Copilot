from pydantic import BaseModel


class InterviewQuestion(BaseModel):
    question: str
    difficulty: str
    expected_answer: str


class InterviewResponse(BaseModel):
    success: bool
    candidate_id: int
    job_id: int
    questions: list[InterviewQuestion]