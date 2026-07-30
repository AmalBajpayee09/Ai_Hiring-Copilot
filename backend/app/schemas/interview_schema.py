from pydantic import BaseModel


class InterviewQuestion(BaseModel):
    question: str
    category: str
    difficulty: str
    expected_answer: str