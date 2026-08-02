from app.ai.ai_engine import AIEngine
from app.ai.parser import AIParser

from app.prompts.skill_gap_prompt import SKILL_GAP_PROMPT

from app.schemas.candidate_schema import CandidateProfile
from app.schemas.skill_gap_schema import SkillGapAnalysis


class SkillGapService:

    def __init__(self):
        self.ai_engine = AIEngine()

    def analyze_skill_gap(
        self,
        candidate: CandidateProfile,
        job_description: str,
    ) -> SkillGapAnalysis:

        prompt = SKILL_GAP_PROMPT.format(
            candidate=candidate.model_dump_json(indent=2),
            job_description=job_description,
        )

        response = self.ai_engine.generate(prompt)

        data = AIParser.extract_json(response)

        return SkillGapAnalysis.model_validate(data)