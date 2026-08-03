import api from "./api";

// Get All Jobs

export async function getJobs() {

    const { data } = await api.get("/jobs/");

    return data;

}

// Create Job

export async function createJob(job) {

    const { data } = await api.post(

        "/jobs/",

        job,

    );

    return data;

}