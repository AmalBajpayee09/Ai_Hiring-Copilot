import { useState } from "react";

import { generateInterview } from "../services/interviewApi";

export default function useInterview() {

    const [interview, setInterview] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    async function generate(
        candidateId,
        jobId,
    ) {

        try {

            setLoading(true);

            setError("");

            const data = await generateInterview(
                candidateId,
                jobId,
            );

            setInterview(data);

            return data;

        }

        catch (err) {

            setError(

                err.response?.data?.detail ||

                "Unable to generate interview."

            );

        }

        finally {

            setLoading(false);

        }

    }

    return {

        generate,

        interview,

        loading,

        error,

    };

}