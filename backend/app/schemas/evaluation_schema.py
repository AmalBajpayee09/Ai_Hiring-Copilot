from typing import List

from pydantic import BaseModel


class CandidateEvaluation(BaseModel):
    overall_score: int

    recommendation: str

    strengths: List[str]

    weaknesses: List[str]

    matched_skills: List[str]

    missing_skills: List[str]

    interview_ready: bool