from pydantic import ValidationError

from app.ai.ai_engine import AIEngine
from app.ai.parser import AIParser

from app.prompts.copilot_prompt import COPILOT_PROMPT

from app.schemas.copilot_response import CopilotResponse


class CopilotService:

    def __init__(self):
        self.ai_engine = AIEngine()

    def generate_decision(
        self,
        summary: str,
        evaluation: str,
        skill_gap: str,
        interview: str,
        rag: str,
    ) -> CopilotResponse:

        prompt = COPILOT_PROMPT.format(
            summary=summary,
            evaluation=evaluation,
            skill_gap=skill_gap,
            interview=interview,
            rag=rag,
        )

        response = self.ai_engine.generate(prompt)

        print("=" * 80)
        
        

        try:

            data = AIParser.extract_json(
                response
            )

            return CopilotResponse.model_validate(
                data
            )

        except ValidationError as e:

            print(e)
            raise

        except Exception as e:

            print(response)
            raise e