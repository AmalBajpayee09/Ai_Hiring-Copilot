from pydantic import BaseModel


class ResumeSummaryRequest(BaseModel):

    candidate_id: int