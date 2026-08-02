from pydantic import ValidationError

from app.ai.ai_engine import AIEngine
from app.ai.parser import AIParser

from app.prompts.resume_summary_prompt import (
    RESUME_SUMMARY_PROMPT,
)

from app.schemas.candidate_schema import CandidateProfile
from app.schemas.resume_summary_schema import (
    ResumeSummaryAnalysis,
)


class ResumeSummaryService:

    def __init__(self):
        self.ai_engine = AIEngine()

    def generate_summary(
        self,
        candidate: CandidateProfile,
    ) -> ResumeSummaryAnalysis:

        prompt = RESUME_SUMMARY_PROMPT.format(
            candidate=candidate.model_dump_json(
                indent=2
            )
        )

        response = self.ai_engine.generate(
            prompt
        )

        print("=" * 80)
        
        

        data = AIParser.extract_json(
            response
        )

        print("=" * 80)
        
        

        try:

            summary = ResumeSummaryAnalysis.model_validate(
                data
            )

            print("=" * 80)
            
            

            return summary

        except ValidationError as e:

            print("=" * 80)
            print("VALIDATION ERROR")
            print(e)
            raise

        except Exception as e:

            print("=" * 80)
            print("UNKNOWN ERROR")
            print(e)
            raise