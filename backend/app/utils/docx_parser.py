from docx import Document


class DOCXParser:
    """
    Utility class responsible for extracting text from DOCX files.
    """

    @staticmethod
    def extract_text(file_path: str) -> str:
        """
        Extract text from a DOCX file.
        """

        document = Document(file_path)

        paragraphs = []

        for paragraph in document.paragraphs:
            text = paragraph.text.strip()

            if text:
                paragraphs.append(text)

        return "\n".join(paragraphs)