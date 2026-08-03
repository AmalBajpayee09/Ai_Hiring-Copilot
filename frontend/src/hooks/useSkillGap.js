import { useState } from "react";

import { generateSkillGap } from "../services/skillGapApi";

export default function useSkillGap() {

    const [skillGap, setSkillGap] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    async function generate(
        candidateId,
        jobId = 1
    ) {

        try {

            setLoading(true);

            setError("");

            const data = await generateSkillGap(

                candidateId,

                jobId

            );

            setSkillGap(data);

            return data;

        }

        catch (err) {

            console.error(err);

            setError(

                err.response?.data?.detail ||

                "Skill Gap generation failed."

            );

            return null;

        }

        finally {

            setLoading(false);

        }

    }

    return {

        generate,

        skillGap,

        loading,

        error,

    };

}