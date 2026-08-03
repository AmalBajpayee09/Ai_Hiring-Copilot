import api from "./api";

export async function askResume(candidateId, question) {

    const { data } = await api.post(

        "/rag/ask",

        {
            candidate_id: candidateId,
            question,
        }

    );

    return data;

}