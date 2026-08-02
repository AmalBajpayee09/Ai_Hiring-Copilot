from pydantic import BaseModel

from app.schemas.resume_summary_schema import (
    ResumeSummaryAnalysis,
)


class ResumeSummaryResponse(BaseModel):

    success: bool

    candidate_id: int

    summary: ResumeSummaryAnalysis