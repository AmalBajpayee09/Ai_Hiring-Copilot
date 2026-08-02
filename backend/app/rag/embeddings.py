import os

from sentence_transformers import (
    SentenceTransformer,
)


class EmbeddingService:
    """
    Generate embeddings for RAG.
    """

    def __init__(self):

        cache_dir = os.path.join(
            os.getcwd(),
            "hf_cache",
        )

        os.makedirs(
            cache_dir,
            exist_ok=True,
        )

        self.model = SentenceTransformer(
            "sentence-transformers/all-MiniLM-L6-v2",
            cache_folder=cache_dir,
        )

    def encode(
        self,
        texts: list[str],
    ):

        return self.model.encode(
            texts,
            convert_to_numpy=True,
        )

    def encode_query(
        self,
        query: str,
    ):

        return self.model.encode(
            query,
            convert_to_numpy=True,
        )