import os
import pickle

import faiss
import numpy as np


class VectorStore:

    INDEX_DIR = "indexes"

    def __init__(self):

        os.makedirs(
            self.INDEX_DIR,
            exist_ok=True,
        )

    def create_index(

        self,

        candidate_id: int,

        embeddings,

        chunks: list[str],

    ):

        dimension = embeddings.shape[1]

        index = faiss.IndexFlatL2(
            dimension
        )

        index.add(
            np.array(
                embeddings,
                dtype="float32",
            )
        )

        faiss.write_index(

            index,

            f"{self.INDEX_DIR}/candidate_{candidate_id}.faiss",

        )

        with open(

            f"{self.INDEX_DIR}/candidate_{candidate_id}.pkl",

            "wb",

        ) as file:

            pickle.dump(
                chunks,
                file,
            )

    def load_index(

        self,

        candidate_id: int,

    ):

        index = faiss.read_index(

            f"{self.INDEX_DIR}/candidate_{candidate_id}.faiss"

        )

        with open(

            f"{self.INDEX_DIR}/candidate_{candidate_id}.pkl",

            "rb",

        ) as file:

            chunks = pickle.load(file)

        return index, chunks