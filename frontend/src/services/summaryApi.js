import api from "./api";

export async function generateResumeSummary(candidateId) {

    const { data } = await api.post(

        "/resume-summary/",

        {

            candidate_id: candidateId,

        }

    );

    return data;

}