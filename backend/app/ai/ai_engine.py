import os

from dotenv import load_dotenv
from groq import Groq

load_dotenv()


class AIEngine:

    def __init__(self):

        self.client = Groq(
            api_key=os.getenv("GROQ_API_KEY")
        )

        self.model = "llama-3.3-70b-versatile"

    def generate(
        self,
        prompt: str,
        temperature: float = 0.1,
    ) -> str:

        response = self.client.chat.completions.create(

            model=self.model,

            temperature=temperature,

            messages=[

                {
                    "role": "system",
                    "content":
                    (
                        "You are a JSON generation engine."
                        "Return ONLY valid JSON."
                        "Never use markdown."
                        "Never explain."
                        "Never wrap JSON inside ```."
                    ),
                },

                {
                    "role": "user",
                    "content": prompt,
                },

            ],
        )

        return response.choices[0].message.content