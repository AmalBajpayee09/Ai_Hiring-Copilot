from pydantic import BaseModel

from app.schemas.evaluation_schema import CandidateEvaluation


class EvaluationResponse(BaseModel):
    success: bool
    candidate_id: int
    evaluation: CandidateEvaluation