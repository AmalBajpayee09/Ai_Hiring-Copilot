from pydantic import BaseModel
from typing import Any


class ChatResponse(BaseModel):

    success: bool

    candidate_id: int

    question: str

    answer: Any