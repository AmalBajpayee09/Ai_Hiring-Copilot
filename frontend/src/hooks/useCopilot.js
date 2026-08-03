import { useState } from "react";

import { generateCopilot } from "../services/copilotApi";

export default function useCopilot() {

    const [copilot, setCopilot] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    async function generate() {

        const candidateId = Number(

            localStorage.getItem("candidate_id")

        );

        const jobId = Number(

            localStorage.getItem("job_id") || 1

        );

        if (!candidateId) {

            setError("Please upload a resume first.");

            return;

        }

        try {

            setLoading(true);

            setError("");

            const data = await generateCopilot(

                candidateId,

                jobId,

            );

            setCopilot(data);

            return data;

        }

        catch (err) {

            console.error(err);

            setError(

                err.response?.data?.detail ||

                "Unable to generate AI decision."

            );

        }

        finally {

            setLoading(false);

        }

    }

    return {

        generate,

        copilot,

        loading,

        error,

    };

}