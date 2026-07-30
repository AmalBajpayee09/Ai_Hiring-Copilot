from pathlib import Path
from uuid import uuid4

MAX_FILE_SIZE = 5 * 1024 * 1024  # 5 MB

ALLOWED_EXTENSIONS = {".pdf", ".docx"}


def generate_unique_filename(original_filename: str) -> str:
    """
    Generate a unique filename while preserving
    the original file extension.
    """
    extension = Path(original_filename).suffix.lower()
    return f"{uuid4()}{extension}"


def validate_extension(filename: str) -> None:
    """
    Validate uploaded file extension.
    """
    extension = Path(filename).suffix.lower()

    if extension not in ALLOWED_EXTENSIONS:
        raise ValueError(
            "Only PDF and DOCX files are supported."
        )


def validate_file_size(file_size: int) -> None:
    """
    Validate uploaded file size.
    """
    if file_size > MAX_FILE_SIZE:
        raise ValueError(
            "File size exceeds the maximum limit of 5 MB."
        )