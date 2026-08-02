from app.database.database import SessionLocal

from app.repositories.candidate_repository import CandidateRepository
from app.repositories.job_repository import JobRepository

from app.rag.rag_service import RAGService

from app.ai.evaluation import EvaluationService
from app.ai.interview import InterviewService
from app.ai.summary import ResumeSummaryService
from app.ai.skill_gap import SkillGapService
from app.ai.copilot import CopilotService


# ---------------------------------------------------
# Services
# ---------------------------------------------------

rag = RAGService()

evaluation_service = EvaluationService()

interview_service = InterviewService()

summary_service = ResumeSummaryService()

skill_gap_service = SkillGapService()

copilot_service = CopilotService()


# ---------------------------------------------------
# Database
# ---------------------------------------------------

db = SessionLocal()

candidate_repo = CandidateRepository(db)

job_repo = JobRepository(db)


# ===================================================
# Decision Node
# ===================================================

def decision_node(state):

    question = state["question"].lower()

    if (
        "hire" in question
        or "recommend" in question
        or "decision" in question
        or "select" in question
    ):

        state["route"] = "copilot"

    elif "interview" in question:

        state["route"] = "interview"

    elif "evaluate" in question:

        state["route"] = "evaluation"

    elif "summary" in question:

        state["route"] = "summary"

    elif "skill" in question:

        state["route"] = "skill_gap"

    else:

        state["route"] = "rag"

    return state


# ===================================================
# RAG
# ===================================================

def rag_node(state):

    answer = rag.ask(

        candidate_id=state["candidate_id"],

        question=state["question"],

    )

    state["answer"] = answer

    return state


# ===================================================
# Evaluation
# ===================================================

def evaluation_node(state):

    candidate = candidate_repo.get_candidate_profile(
        state["candidate_id"]
    )

    job_description = job_repo.get_job_description(
        1
    )

    evaluation = evaluation_service.evaluate_candidate(

        candidate,

        job_description,

    )

    state["answer"] = evaluation.model_dump_json(
        indent=2
    )

    return state


# ===================================================
# Interview
# ===================================================

def interview_node(state):

    candidate = candidate_repo.get_candidate_profile(
        state["candidate_id"]
    )

    job_description = job_repo.get_job_description(
        1
    )

    interview = interview_service.generate_interview(

        candidate,

        job_description,

    )

    state["answer"] = interview.model_dump_json(
        indent=2
    )

    return state


# ===================================================
# Resume Summary
# ===================================================

def summary_node(state):

    candidate = candidate_repo.get_candidate_profile(
        state["candidate_id"]
    )

    summary = summary_service.generate_summary(
        candidate
    )

    state["answer"] = summary.model_dump_json(
        indent=2
    )

    return state


# ===================================================
# Skill Gap
# ===================================================

def skill_gap_node(state):

    candidate = candidate_repo.get_candidate_profile(
        state["candidate_id"]
    )

    job_description = job_repo.get_job_description(
        1
    )

    analysis = skill_gap_service.analyze_skill_gap(

        candidate,

        job_description,

    )

    state["answer"] = analysis.model_dump_json(
        indent=2
    )

    return state


# ===================================================
# AI Hiring Copilot
# ===================================================

def copilot_node(state):

    candidate = candidate_repo.get_candidate_profile(
        state["candidate_id"]
    )

    job_description = job_repo.get_job_description(
        1
    )

    summary = summary_service.generate_summary(
        candidate
    )

    evaluation = evaluation_service.evaluate_candidate(

        candidate,

        job_description,

    )

    skill_gap = skill_gap_service.analyze_skill_gap(

        candidate,

        job_description,

    )

    interview = interview_service.generate_interview(

        candidate,

        job_description,

    )

    rag_answer = rag.ask(

        candidate_id=state["candidate_id"],

        question=state["question"],

    )

    decision = copilot_service.generate_decision(

        summary=summary.model_dump_json(),

        evaluation=evaluation.model_dump_json(),

        skill_gap=skill_gap.model_dump_json(),

        interview=interview.model_dump_json(),

        rag=rag_answer,

    )

    state["answer"] = decision.model_dump_json(
        indent=2
    )

    return state