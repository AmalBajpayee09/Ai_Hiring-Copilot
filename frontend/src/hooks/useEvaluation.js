import { useState } from "react";

import { evaluateCandidate } from "../services/evaluationApi";

export default function useEvaluation() {

    const [evaluation, setEvaluation] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    async function generate(
        candidateId,
        jobId = 1,
    ) {

        try {

            setLoading(true);

            setError("");

            const data = await evaluateCandidate(
                candidateId,
                jobId,
            );

            setEvaluation(data);

            return data;

        }

        catch (err) {

            console.error(err);

            setError(

                err.response?.data?.detail ||

                "Unable to evaluate candidate."

            );

        }

        finally {

            setLoading(false);

        }

    }

    return {

        generate,

        evaluation,

        loading,

        error,

    };

}