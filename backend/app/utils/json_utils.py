import json


def extract_json(response: str) -> dict:
    """
    Extract JSON from an LLM response.
    """

    response = response.strip()

    if response.startswith("```json"):
        response = response.replace("```json", "")

    if response.endswith("```"):
        response = response[:-3]

    response = response.strip()

    return json.loads(response)