import {
    Box,
    Button,
    Alert,
    CircularProgress,
    Fade,
    Paper,
    Typography,
} from "@mui/material";

import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

import useCopilot from "../../hooks/useCopilot";

import CopilotHeader from "../../components/Copilot/CopilotHeader";
import WorkflowTimeline from "../../components/Copilot/WorkflowTimeline";
import DecisionCard from "../../components/Copilot/DecisionCard";
import ProsConsCard from "../../components/Copilot/ProsConsCard";
import ReasoningCard from "../../components/Copilot/ReasoningCard";
import InterviewFocusCard from "../../components/Copilot/InterviewFocusCard";
import ActionPanel from "../../components/Copilot/ActionPanel";

export default function Copilot() {

    const {

        generate,

        copilot,

        loading,

        error,

    } = useCopilot();

    return (

        <Box

            sx={{

                px: 4,

                py: 4,

                minHeight: "100vh",

                background:
                    "linear-gradient(180deg,#070B14,#0B1220)",

            }}

        >

            <CopilotHeader />

            {/* Generate Button */}

            <Box

                mt={5}

                display="flex"

                justifyContent="center"

            >

                <Button

                    size="large"

                    variant="contained"

                    startIcon={

                        <AutoAwesomeRoundedIcon />

                    }

                    onClick={generate}

                    disabled={loading}

                    sx={{

                        px: 6,

                        py: 1.8,

                        borderRadius: "18px",

                        fontWeight: 700,

                        fontSize: 17,

                        background:

                            "linear-gradient(90deg,#4F7CFF,#6C63FF)",

                        boxShadow:

                            "0 0 25px rgba(79,124,255,.35)",

                        transition: ".3s",

                        "&:hover": {

                            transform:

                                "translateY(-3px)",

                            boxShadow:

                                "0 0 35px rgba(79,124,255,.55)",

                        },

                    }}

                >

                    {

                        loading

                            ?

                            "AI is Making Decision..."

                            :

                            "Generate AI Hiring Decision"

                    }

                </Button>

            </Box>

            {/* Loading */}

            {

                loading && (

                    <Fade

                        in

                        timeout={600}

                    >

                        <Box mt={5}>

                            <WorkflowTimeline />

                            <Box

                                display="flex"

                                flexDirection="column"

                                alignItems="center"

                                mt={5}

                            >

                                <CircularProgress

                                    size={60}

                                />

                                <Typography

                                    mt={3}

                                    color="#94A3B8"

                                >

                                    AI Hiring Manager is analyzing

                                    Resume,

                                    Evaluation,

                                    Skill Gap,

                                    Interview &

                                    RAG Context...

                                </Typography>

                            </Box>

                        </Box>

                    </Fade>

                )

            }

            {/* Error */}

            {

                error && (

                    <Alert

                        severity="error"

                        sx={{

                            mt: 4,

                            borderRadius: 3,

                        }}

                    >

                        {error}

                    </Alert>

                )

            }

            {/* Empty State */}

            {

                !loading &&

                !copilot &&

                !error && (

                    <Fade

                        in

                        timeout={800}

                    >

                        <Paper

                            elevation={0}

                            sx={{

                                mt: 6,

                                p: 6,

                                textAlign: "center",

                                borderRadius: 5,

                                background:

                                    "rgba(17,24,39,.65)",

                                backdropFilter:

                                    "blur(18px)",

                                border:

                                    "1px solid rgba(255,255,255,.06)",

                            }}

                        >

                            <SmartToyRoundedIcon

                                sx={{

                                    fontSize: 70,

                                    color: "#4F7CFF",

                                    mb: 2,

                                }}

                            />

                            <Typography

                                variant="h4"

                                fontWeight={700}

                                mb={2}

                            >

                                AI Hiring Manager

                            </Typography>

                            <Typography

                                color="#94A3B8"

                                maxWidth={650}

                                mx="auto"

                                lineHeight={1.8}

                            >

                                This AI agent combines Resume Summary,

                                Candidate Evaluation,

                                Skill Gap Analysis,

                                Interview Generator and

                                RAG Context to produce a

                                final hiring recommendation.

                            </Typography>

                        </Paper>

                    </Fade>

                )

            }

            {/* Result */}

            {

                copilot && (

                    <Fade

                        in

                        timeout={800}

                    >

                        <Box>

                            <DecisionCard

                                decision={copilot}

                            />

                            <ProsConsCard

                                decision={copilot}

                            />

                            <ReasoningCard

                                decision={copilot}

                            />

                            <InterviewFocusCard

                                decision={copilot}

                            />

                            <ActionPanel />

                        </Box>

                    </Fade>

                )

            }

        </Box>

    );

}