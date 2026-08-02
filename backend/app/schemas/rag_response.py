from typing import Any

from pydantic import BaseModel


class RAGResponse(BaseModel):

    success: bool

    candidate_id: int

    question: str

    answer: Any