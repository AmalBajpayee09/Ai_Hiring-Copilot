from app.ai.ai_engine import AIEngine
from app.ai.parser import AIParser

from app.prompts.interview_prompt import INTERVIEW_GENERATION_PROMPT

from app.schemas.candidate_schema import CandidateProfile
from app.schemas.interview_response import InterviewResult


class InterviewService:

    def __init__(self):
        self.ai_engine = AIEngine()

    def generate_interview(
        self,
        candidate: CandidateProfile,
        job_description: str,
    ) -> InterviewResult:

        prompt = INTERVIEW_GENERATION_PROMPT.format(
            candidate=candidate.model_dump_json(indent=2),
            job_description=job_description,
        )

        response = self.ai_engine.generate(prompt)

        interview_json = AIParser.extract_json(response)

        return InterviewResult.model_validate(interview_json)