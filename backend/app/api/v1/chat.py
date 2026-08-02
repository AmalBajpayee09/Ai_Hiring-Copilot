from fastapi import APIRouter
from fastapi import HTTPException

from app.schemas.chat_request import ChatRequest
from app.schemas.chat_response import ChatResponse

from app.agents.hiring_agent import HiringAgent
from app.cache.cache_service import CacheService

router = APIRouter(

    prefix="/api/v1/chat",

    tags=["AI Chat"],

)

agent = HiringAgent()

cache = CacheService()


@router.post(
    "/",
    response_model=ChatResponse,
)
def chat(

    request: ChatRequest,

):

    try:

        cache_key = (
            f"chat:{request.candidate_id}:{request.question.lower().strip()}"
        )

        cached = cache.get(cache_key)

        if cached:

            print("=" * 80)
            print("✅ Chat Cache Hit")

            return ChatResponse(

                success=True,

                candidate_id=request.candidate_id,

                question=request.question,

                answer=cached,

            )

        print("=" * 80)
        print("❌ Chat Cache Miss")

        answer = agent.ask(

            request.candidate_id,

            request.question,

        )

        cache.set(

            cache_key,

            answer,

            ttl=3600,

        )

        return ChatResponse(

            success=True,

            candidate_id=request.candidate_id,

            question=request.question,

            answer=answer,

        )

    except Exception as e:

        raise HTTPException(

            status_code=500,

            detail=str(e),

        )