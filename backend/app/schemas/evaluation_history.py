from pydantic import BaseModel


class EvaluationHistory(BaseModel):

    id: int

    candidate_id: int

    job_description: str

    overall_score: int

    recommendation: str

    strengths: list[str]

    weaknesses: list[str]

    matched_skills: list[str]

    missing_skills: list[str]

    interview_ready: bool

    class Config:
        from_attributes = True