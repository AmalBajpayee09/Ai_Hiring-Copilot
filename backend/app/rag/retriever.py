import numpy as np

from app.rag.embeddings import EmbeddingService
from app.rag.vector_store import VectorStore


class Retriever:

    def __init__(self):

        self.embedding_service = EmbeddingService()

        self.vector_store = VectorStore()

    def retrieve(

        self,

        candidate_id: int,

        question: str,

        top_k: int = 3,

    ) -> list[str]:

        index, chunks = self.vector_store.load_index(
            candidate_id
        )

        query_embedding = self.embedding_service.encode_query(
            question
        )

        query_embedding = np.array(
            [query_embedding],
            dtype="float32",
        )

        distances, indices = index.search(
            query_embedding,
            top_k,
        )

        return [
            chunks[i]
            for i in indices[0]
        ]