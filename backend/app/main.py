from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.resume import router as resume_router
from app.api.v1.candidates import router as candidate_router
from app.api.v1.jobs import router as job_router

from app.api.v1.evaluation import (
    router as evaluation_router,
)

from app.api.v1.interview import (
    router as interview_router,
)

from app.api.v1.skill_gap import (
    router as skill_gap_router,
)

from app.api.v1.resume_summary import (
    router as resume_summary_router,
)

from app.api.v1.rag import (
    router as rag_router,
)

from app.api.v1.index import (
    router as index_router,
)

# NEW APIs
from app.api.routes.evaluation import (
    router as evaluation_ai_router,
)

from app.api.routes.interview import (
    router as interview_ai_router,
)

from app.api.routes.summary import (
    router as summary_ai_router,
)

from app.api.routes.skill_gap import (
    router as skill_gap_ai_router,
)

from app.api.routes.copilot import (
    router as copilot_router,
)


from app.api.v1.copilot import (
    router as copilot_router,
)
from app.api.v1.chat import (
    router as chat_router,
)


app = FastAPI(

    title="AI Hiring Copilot API",

    description="LLM Powered Intelligent Recruitment Platform",

    version="1.0.0",

)

# -------------------------------
# CORS
# -------------------------------

app.add_middleware(

    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)

# -------------------------------
# Existing APIs
# -------------------------------

app.include_router(resume_router)

app.include_router(candidate_router)

app.include_router(job_router)

app.include_router(evaluation_router)

app.include_router(interview_router)

app.include_router(skill_gap_router)

app.include_router(resume_summary_router)

app.include_router(rag_router)

app.include_router(index_router)

# -------------------------------
# LangGraph AI APIs
# -------------------------------

app.include_router(evaluation_ai_router)

app.include_router(interview_ai_router)

app.include_router(summary_ai_router)

app.include_router(skill_gap_ai_router)

app.include_router(copilot_router)


app.include_router(
    copilot_router
)
app.include_router(chat_router)

@app.get("/")
def root():

    return {

        "success": True,

        "message": "AI Hiring Copilot API Running 🚀",

        "version": "1.0.0",

    }


@app.get("/health")
def health():

    return {

        "status": "healthy",

        "database": "connected",

        "ai": "ready",

        "langgraph": "ready",

    }