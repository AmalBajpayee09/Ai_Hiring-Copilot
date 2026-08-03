import api from "./api";

export async function generateSkillGap(
    candidateId,
    jobId = 1
) {

    const { data } = await api.post(

        "/skill-gap/",

        {
            candidate_id: candidateId,
            job_id: jobId,
        }

    );

    return data;

}   