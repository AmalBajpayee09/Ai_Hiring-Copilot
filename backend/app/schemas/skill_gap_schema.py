from typing import List

from pydantic import BaseModel


class MissingSkill(BaseModel):
    skill: str

    priority: str

    estimated_time: str

    resources: List[str]


class SkillGapAnalysis(BaseModel):
    matched_skills: List[str]

    missing_skills: List[MissingSkill]

    roadmap: List[str]

    overall_readiness: int