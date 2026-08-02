from pydantic import BaseModel


class SkillGapRequest(BaseModel):
    candidate_id: int
    job_id: int