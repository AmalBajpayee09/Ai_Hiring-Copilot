import { useState } from "react";

import {

    getJobs,
    createJob,

} from "../services/jobsApi";

export default function useJobs() {

    const [jobs, setJobs] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    async function fetchJobs() {

        try {

            setLoading(true);

            setError("");

            const data = await getJobs();

            setJobs(data);

            return data;

        }

        catch (err) {

            setError(

                err.response?.data?.detail ||

                "Unable to fetch jobs."

            );

        }

        finally {

            setLoading(false);

        }

    }

    async function addJob(job) {

        try {

            setLoading(true);

            setError("");

            const data = await createJob(job);

            setJobs(prev => [

                ...prev,

                data,

            ]);

            return data;

        }

        catch (err) {

            setError(

                err.response?.data?.detail ||

                "Unable to create job."

            );

        }

        finally {

            setLoading(false);

        }

    }

    return {

        jobs,

        loading,

        error,

        fetchJobs,

        addJob,

    };

}