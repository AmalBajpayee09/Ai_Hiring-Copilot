from pydantic import BaseModel


class InterviewRequest(BaseModel):
    candidate_id: int
    job_id: int