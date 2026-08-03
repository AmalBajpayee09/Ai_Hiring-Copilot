import { useState } from "react";

import {
    Box,
    Typography,
    Alert,
    CircularProgress,
} from "@mui/material";

import UploadZone from "../../components/Resume/UploadZone";
import ResumePreview from "../../components/Resume/ResumePreview";
import ResumeAnalysis from "../../components/Resume/ResumeAnalysis";
import ResumeSummary from "../../components/Resume/ResumeSummary";
import SkillGapCard from "../../components/SkillGap/SkillGapCard";

import useResumeUpload from "../../hooks/useResumeUpload";
import useResumeSummary from "../../hooks/useResumeSummary";
import useSkillGap from "../../hooks/useSkillGap";

export default function Resume() {

    const [file, setFile] = useState(null);

    // Resume Upload

    const {

        upload,

        loading,

        analysis,

        error,

    } = useResumeUpload();

    // Resume Summary

    const {

        generate,

        summary,

        loading: summaryLoading,

        error: summaryError,

    } = useResumeSummary();

    // Skill Gap

    const {

        generate: generateSkillGap,

        skillGap,

        loading: skillGapLoading,

        error: skillGapError,

    } = useSkillGap();

    const handleSelect = async (selectedFile) => {

        if (!selectedFile) return;

        setFile(selectedFile);

        // Upload Resume

        const response = await upload(selectedFile);

        console.log("UPLOAD RESPONSE :", response);

        if (!response?.candidate_id) return;
        localStorage.setItem("candidate_id", response.candidate_id);
        

        // Resume Summary

        const summaryResponse = await generate(

            response.candidate_id

        );

        console.log(

            "SUMMARY RESPONSE :",

            summaryResponse

        );

        // Skill Gap

        const skillGapResponse = await generateSkillGap(

            response.candidate_id,

            1

        );

        console.log(

            "SKILL GAP RESPONSE :",

            skillGapResponse

        );

    };

    return (

        <Box

            sx={{

                // ml: "280px",

                // mt: "72px",

                px: 4,

                py: 4,

                minHeight: "100vh",

                background: "#070B14",

            }}

        >

            <Typography

                variant="h4"

                fontWeight={700}

                mb={4}

            >

                📄 Resume AI

            </Typography>

            {/* Upload */}

            <UploadZone

                onFileSelect={handleSelect}

            />

            {/* Preview */}

            {

                file && (

                    <ResumePreview

                        file={file}

                    />

                )

            }

            {/* Upload Loading */}

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

            {/* Upload Error */}

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

            {/* Resume Analysis */}

            {

                analysis && (

                    <ResumeAnalysis

                        analysis={analysis}

                    />

                )

            }

            {/* Summary Loading */}

            {

                summaryLoading && (

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

            {/* Summary Error */}

            {

                summaryError && (

                    <Alert

                        severity="error"

                        sx={{ mt: 4 }}

                    >

                        {summaryError}

                    </Alert>

                )

            }

            {/* Resume Summary */}

            {

                summary && (

                    <ResumeSummary

                        summary={summary}

                    />

                )

            }

            {/* Skill Gap Loading */}

            {

                skillGapLoading && (

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

            {/* Skill Gap Error */}

            {

                skillGapError && (

                    <Alert

                        severity="error"

                        sx={{ mt: 4 }}

                    >

                        {skillGapError}

                    </Alert>

                )

            }

            {/* Skill Gap */}

            {

                skillGap && (

                    <SkillGapCard

                        skillGap={skillGap}

                    />

                )

            }

        </Box>

    );

}