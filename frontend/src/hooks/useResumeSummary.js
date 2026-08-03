import { useState } from "react";

import { generateResumeSummary } from "../services/summaryApi";

export default function useResumeSummary() {

    const [summary, setSummary] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    async function generate(candidateId) {

        try {

            setLoading(true);

            setError("");

            const data = await generateResumeSummary(candidateId);

            setSummary(data);

            return data;

        }

        catch (err) {

            setError(

                err.response?.data?.detail ||

                "Unable to generate summary."

            );

        }

        finally {

            setLoading(false);

        }

    }

    return {

        generate,

        summary,

        loading,

        error,

    };

}