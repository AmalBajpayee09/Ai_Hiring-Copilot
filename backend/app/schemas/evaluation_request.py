from pydantic import BaseModel


class EvaluationRequest(BaseModel):
    candidate_id: int
    job_id: int