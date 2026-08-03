import api from "./api";

export async function generateCopilot(candidateId, jobId) {

    const { data } = await api.post(

        "/copilot/",

        {
            candidate_id: candidateId,
            job_id: jobId,
        }

    );

    return data;

}