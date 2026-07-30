from app.ai.ai_engine import AIEngine
from app.ai.parser import AIParser

from app.prompts.evaluation_prompt import CANDIDATE_EVALUATION_PROMPT

from app.schemas.candidate_schema import CandidateProfile
from app.schemas.evaluation_schema import CandidateEvaluation


class EvaluationService:

    def __init__(self):
        self.ai_engine = AIEngine()

    def evaluate_candidate(
        self,
        candidate: CandidateProfile,
        job_description: str,
    ) -> CandidateEvaluation:

        prompt = (
    CANDIDATE_EVALUATION_PROMPT
    + "\n\nCandidate:\n"
    + candidate.model_dump_json(indent=2)
    + "\n\nJob Description:\n"
    + job_description
    )

        response = self.ai_engine.generate(prompt)

        data = AIParser.extract_json(response)

        return CandidateEvaluation(**data)