from fastapi import APIRouter

from app.api.routes.evaluation import router as evaluation_router
from app.api.routes.interview import router as interview_router
from app.api.routes.summary import router as summary_router
from app.api.routes.skill_gap import router as skill_gap_router
from app.api.routes.copilot import router as copilot_router
from app.api.routes.chat import router as chat_router

router = APIRouter()

router.include_router(evaluation_router)
router.include_router(interview_router)
router.include_router(summary_router)
router.include_router(skill_gap_router)
router.include_router(copilot_router)
router.include_router(chat_router)