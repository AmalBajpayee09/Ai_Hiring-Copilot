from fastapi import APIRouter

from app.schemas.chat_request import ChatRequest

from app.agents.hiring_agent import HiringAgent

router = APIRouter(
    prefix="/chat",
    tags=["AI Chat"],
)

agent = HiringAgent()


@router.post("/")
def chat(request: ChatRequest):

    return agent.ask(
        request.candidate_id,
        request.question,
    )