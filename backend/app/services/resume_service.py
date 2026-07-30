from pathlib import Path

from app.utils.pdf_parser import PDFParser
from app.utils.docx_parser import DOCXParser


class ResumeService:
    """
    Service responsible for extracting text
    from uploaded resumes.
    """

    ALLOWED_EXTENSIONS = {
        ".pdf",
        ".docx",
    }

    def extract_text(
        self,
        file_path: str,
    ) -> str:
        """
        Detect file type and delegate parsing
        to the appropriate parser.
        """

        extension = Path(file_path).suffix.lower()

        if extension == ".pdf":
            return PDFParser.extract_text(file_path)

        if extension == ".docx":
            return DOCXParser.extract_text(file_path)

        raise ValueError(
            "Unsupported file format."
        )