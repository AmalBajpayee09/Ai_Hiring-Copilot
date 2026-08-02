from pydantic import BaseModel


class ChatRequest(BaseModel):
    candidate_id: int
    question: str