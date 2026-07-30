import json

from app.ai.ai_engine import AIEngine
from app.prompts.resume_prompt import RESUME_EXTRACTION_PROMPT
from app.schemas.candidate_schema import CandidateProfile


class ExtractionService:

    def __init__(self):
        self.ai_engine = AIEngine()

    def extract_candidate(
        self,
        resume_text: str,
    ) -> CandidateProfile:

        prompt = (
            RESUME_EXTRACTION_PROMPT
            + "\n\nResume:\n"
            + resume_text
        )

        response = self.ai_engine.generate(prompt)

        try:
            data = json.loads(response)
        except json.JSONDecodeError:
            raise ValueError("AI returned invalid JSON.")

        return CandidateProfile(**data)