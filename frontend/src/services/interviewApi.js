import api from "./api";

export async function generateInterview(
    candidateId,
    jobId,
) {

    const { data } = await api.post(

        "/interview/",

        {
            candidate_id: candidateId,
            job_id: jobId,
        }

    );

    return data;

}