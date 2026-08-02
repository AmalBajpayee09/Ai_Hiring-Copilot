from typing import List

from pydantic import BaseModel


class ResumeSummaryAnalysis(BaseModel):

    headline: str

    experience: str

    education: str

    top_skills: List[str]

    strengths: List[str]

    weaknesses: List[str]

    hire_decision: str

    overall_summary: str

    elevator_pitch: str