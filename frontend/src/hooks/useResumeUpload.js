import { useState } from "react";
import { uploadResume } from "../services/resumeService";

export default function useResumeUpload() {

    const [loading, setLoading] = useState(false);
    const [analysis, setAnalysis] = useState(null);
    const [error, setError] = useState(null);

    async function upload(file) {

        try {

            setLoading(true);
            setError(null);

            const result = await uploadResume(file);

            setAnalysis(result);
            return result;

        } catch (err) {

            console.error(err);

            setError(
                err.response?.data?.detail ||
                "Upload Failed"
            );
            return null;

        } finally {

            setLoading(false);

        }

    }

    return {

        upload,

        loading,

        analysis,

        error,

    };

}