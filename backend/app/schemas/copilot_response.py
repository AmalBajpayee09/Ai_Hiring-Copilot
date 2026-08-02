from typing import List

from pydantic import BaseModel


class CopilotResponse(BaseModel):

    decision: str

    confidence: int

    pros: List[str]

    cons: List[str]

    reasoning: List[str]

    interview_focus: List[str]

    salary_range: str

    risk: str