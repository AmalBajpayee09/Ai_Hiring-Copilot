from pypdf import PdfReader


class PDFParser:
    """
    Utility class responsible for extracting text from PDF files.
    """

    @staticmethod
    def extract_text(file_path: str) -> str:
        """
        Extract text from a PDF file.
        """

        reader = PdfReader(file_path)

        pages = []

        for page in reader.pages:
            text = page.extract_text()

            if text:
                pages.append(text)

        return "\n".join(pages)