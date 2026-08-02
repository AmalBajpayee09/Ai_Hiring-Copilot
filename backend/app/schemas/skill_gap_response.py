from pydantic import BaseModel

from app.schemas.skill_gap_schema import SkillGapAnalysis


class SkillGapResponse(BaseModel):
    success: bool

    candidate_id: int

    job_id: int

    analysis: SkillGapAnalysis