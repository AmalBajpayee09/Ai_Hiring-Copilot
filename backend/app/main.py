from fastapi import FastAPI

from app.api.v1.resume import router as resume_router
from app.api.v1.candidates import router as candidate_router
from app.api.v1.evaluation import (
    router as evaluation_router,
)
from app.api.v1.jobs import (
    router as job_router,
)
app = FastAPI(
    title="AI Hiring Copilot API",
    description="LLM Powered Intelligent Recruitment Platform",
    version="1.0.0",
)

app.include_router(resume_router)
app.include_router(candidate_router)
app.include_router(evaluation_router)
app.include_router(job_router)

@app.get("/")
def root():
    return {
        "message": "Welcome to AI Hiring Copilot API"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }