import {
    Box,
    Button,
    CircularProgress,
    Typography,
    Alert,
} from "@mui/material";

import InterviewCard from "../../components/Interview/InterviewCard";
import useInterview from "../../hooks/useInterview";

export default function Interview() {

    const {

        generate,

        interview,

        loading,

        error,

    } = useInterview();

    async function handleGenerate() {

        const candidateId = Number(
            localStorage.getItem("candidate_id")
        );

        const jobId = Number(
            localStorage.getItem("job_id") || 1
        );

        if (!candidateId) {

            alert("Please upload a resume first.");

            return;

        }

        await generate(
            candidateId,
            jobId,
        );

    }

    return (

        <Box
            sx={{

                px: 4,

                py: 4,

                minHeight: "100vh",

                background: "#070B14",

            }}
        >

            <Typography
                variant="h4"
                fontWeight={700}
                mb={1}
            >

                🎤 AI Interview Generator

            </Typography>

            <Typography
                sx={{
                    color: "#94A3B8",
                    mb: 4,
                }}
            >

                Selected Job :

                <Typography
                    component="span"
                    sx={{
                        color: "#4F7CFF",
                        fontWeight: 600,
                        ml: 1,
                    }}
                >

                    {

                        localStorage.getItem(
                            "job_title"
                        ) ||

                        "No Job Selected"

                    }

                </Typography>

            </Typography>

            <Button
                variant="contained"
                size="large"
                onClick={handleGenerate}
            >

                Generate Interview

            </Button>

            {

                loading && (

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: 4,
                        }}
                    >

                        <CircularProgress />

                    </Box>

                )

            }

            {

                error && (

                    <Alert
                        severity="error"
                        sx={{ mt: 4 }}
                    >

                        {error}

                    </Alert>

                )

            }

            {

                interview && (

                    <InterviewCard
                        interview={interview}
                    />

                )

            }

        </Box>

    );

}