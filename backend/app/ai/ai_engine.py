import os

from dotenv import load_dotenv
from groq import Groq

from app.prompts.evaluation_prompt import (
    CANDIDATE_EVALUATION_PROMPT,
)
from app.prompts.resume_prompt import (
    RESUME_EXTRACTION_PROMPT,
)
from app.schemas.candidate_schema import CandidateProfile
from app.schemas.evaluation_schema import CandidateEvaluation
from app.utils.json_utils import extract_json

load_dotenv()


class AIEngine:
    """
    Central AI service for all LLM operations.
    """

    def __init__(self):

        api_key = os.getenv("GROQ_API_KEY")

        if not api_key:
            raise ValueError("GROQ_API_KEY not found.")

        self.client = Groq(api_key=api_key)

        self.model = "llama-3.3-70b-versatile"

    def extract_candidate(
        self,
        resume_text: str,
    ) -> CandidateProfile:
        """
        Extract structured candidate information from a resume.
        """

        response = self.client.chat.completions.create(
            model=self.model,
            messages=[
                {
                    "role": "system",
                    "content": RESUME_EXTRACTION_PROMPT,
                },
                {
                    "role": "user",
                    "content": resume_text,
                },
            ],
            temperature=0,
        )

        content = response.choices[0].message.content

        candidate = extract_json(content)

        return CandidateProfile(**candidate)

    def evaluate_candidate(
        self,
        candidate: CandidateProfile,
        job_description: str,
    ) -> CandidateEvaluation:
        """
        Evaluate a candidate against a job description.
        """

        response = self.client.chat.completions.create(
            model=self.model,
            messages=[
                {
                    "role": "system",
                    "content": CANDIDATE_EVALUATION_PROMPT,
                },
                {
                    "role": "user",
                    "content": f"""
Candidate Profile:

{candidate.model_dump_json(indent=2)}

Job Description:

{job_description}
""",
                },
            ],
            temperature=0,
        )

        content = response.choices[0].message.content

        evaluation = extract_json(content)

        return CandidateEvaluation(**evaluation)