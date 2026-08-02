from pydantic import BaseModel


class CandidateRequest(BaseModel):
    candidate_id: int