from pydantic import BaseModel


class RAGRequest(BaseModel):

    candidate_id: int

    question: str