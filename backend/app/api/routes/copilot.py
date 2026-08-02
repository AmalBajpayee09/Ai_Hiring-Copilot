from fastapi import APIRouter

from app.schemas.candidate_request import CandidateRequest

from app.agents.hiring_agent import HiringAgent

router = APIRouter(
    prefix="/candidate",
    tags=["AI Copilot"],
)

agent = HiringAgent()


@router.post("/copilot")
def copilot(request: CandidateRequest):

    return agent.ask(
        request.candidate_id,
        "Should I hire this candidate?"
    )