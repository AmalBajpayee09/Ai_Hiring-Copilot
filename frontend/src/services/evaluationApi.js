import api from "./api";

export async function evaluateCandidate(
    candidateId,
    jobId = 1,
) {

    const { data } = await api.post(
        "/evaluation/",
        {
            candidate_id: candidateId,
            job_id: jobId,
        }
    );

    return data;

}