from app.ai.ai_engine import AIEngine

from app.prompts.rag_prompt import RAG_PROMPT

from app.rag.retriever import Retriever


class RAGService:

    def __init__(self):

        self.retriever = Retriever()

        self.ai = AIEngine()

    def ask(

        self,

        candidate_id: int,

        question: str,

    ) -> str:

        chunks = self.retriever.retrieve(

            candidate_id,

            question,

        )

        context = "\n\n".join(
            chunks
        )

        prompt = RAG_PROMPT.format(

            context=context,

            question=question,

        )

        return self.ai.generate(
            prompt
        )