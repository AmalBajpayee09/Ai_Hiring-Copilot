from pydantic import BaseModel


class CopilotRequest(BaseModel):

    candidate_id: int

    job_id: int