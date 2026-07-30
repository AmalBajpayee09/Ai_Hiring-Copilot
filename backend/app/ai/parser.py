import json
import re


class AIParser:

    @staticmethod
    def extract_json(
        text: str,
    ):

        match = re.search(
            r"\{.*\}",
            text,
            re.DOTALL,
        )

        if not match:
            raise ValueError(
                "No JSON found in AI response."
            )

        return json.loads(
            match.group()
        )