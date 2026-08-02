import json
import re

from json_repair import repair_json


class AIParser:

    @staticmethod
    def extract_json(text: str):

        match = re.search(
            r"\{[\s\S]*\}",
            text,
        )

        if not match:
            raise ValueError(
                "No JSON object found in AI response."
            )

        raw_json = match.group()

        try:
            return json.loads(raw_json)

        except Exception:

            repaired = repair_json(raw_json)

            return json.loads(repaired)