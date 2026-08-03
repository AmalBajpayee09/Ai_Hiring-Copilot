import {
    Paper,
    Box,
    Typography,
    LinearProgress,
    Stack,
    Fade,
} from "@mui/material";

import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import { useEffect, useState } from "react";

const workflow = [

    {
        title: "Resume Summary",
        subtitle: "Reading resume & extracting profile...",
        icon: <DescriptionRoundedIcon />,
    },

    {
        title: "Candidate Evaluation",
        subtitle: "Comparing candidate with job...",
        icon: <PsychologyRoundedIcon />,
    },

    {
        title: "Skill Gap Analysis",
        subtitle: "Detecting missing skills...",
        icon: <TrendingUpRoundedIcon />,
    },

    {
        title: "Interview Generator",
        subtitle: "Preparing technical questions...",
        icon: <QuizRoundedIcon />,
    },

    {
        title: "RAG Context Search",
        subtitle: "Searching candidate knowledge...",
        icon: <SearchRoundedIcon />,
    },

    {
        title: "Final AI Decision",
        subtitle: "Generating hiring recommendation...",
        icon: <SmartToyRoundedIcon />,
    },

];

export default function WorkflowTimeline() {

    const [active, setActive] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {

            setActive((prev) => {

                if (prev >= workflow.length - 1)

                    return prev;

                return prev + 1;

            });

        }, 700);

        return () => clearInterval(timer);

    }, []);

    return (

        <Paper

            elevation={0}

            sx={{

                mt: 4,

                p: 4,

                borderRadius: 5,

                background:
                    "rgba(17,24,39,.75)",

                backdropFilter: "blur(18px)",

                border:
                    "1px solid rgba(255,255,255,.06)",

            }}

        >

            <Typography

                variant="h5"

                fontWeight={700}

                mb={1}

            >

                ⚡ LangGraph Multi-Agent Workflow

            </Typography>

            <Typography

                color="#94A3B8"

                mb={4}

            >

                AI Hiring Manager is coordinating multiple intelligent agents
                to make the final hiring decision.

            </Typography>

            <LinearProgress

                variant="determinate"

                value={

                    ((active + 1) / workflow.length) * 100

                }

                sx={{

                    mb: 4,

                    height: 10,

                    borderRadius: 5,

                }}

            />

            <Stack spacing={2}>

                {

                    workflow.map((step, index) => (

                        <Fade

                            in={index <= active}

                            timeout={600}

                            key={step.title}

                        >

                            <Paper

                                elevation={0}

                                sx={{

                                    p: 2,

                                    borderRadius: 3,

                                    bgcolor:

                                        index <= active

                                            ? "#0F172A"

                                            : "#111827",

                                    border:

                                        index <= active

                                            ? "1px solid rgba(79,124,255,.35)"

                                            : "1px solid rgba(255,255,255,.05)",

                                    transition: ".3s",

                                    "&:hover": {

                                        transform:

                                            "translateX(6px)",

                                    },

                                }}

                            >

                                <Box

                                    display="flex"

                                    alignItems="center"

                                    justifyContent="space-between"

                                >

                                    <Box

                                        display="flex"

                                        alignItems="center"

                                        gap={2}

                                    >

                                        <Box

                                            sx={{

                                                width: 46,

                                                height: 46,

                                                borderRadius: "50%",

                                                bgcolor:

                                                    "#4F7CFF",

                                                display: "flex",

                                                alignItems: "center",

                                                justifyContent: "center",

                                                color: "white",

                                            }}

                                        >

                                            {

                                                step.icon

                                            }

                                        </Box>

                                        <Box>

                                            <Typography

                                                fontWeight={700}

                                            >

                                                {

                                                    step.title

                                                }

                                            </Typography>

                                            <Typography

                                                color="#94A3B8"

                                                fontSize={13}

                                            >

                                                {

                                                    step.subtitle

                                                }

                                            </Typography>

                                        </Box>

                                    </Box>

                                    {

                                        index < active ? (

                                            <CheckCircleRoundedIcon

                                                color="success"

                                            />

                                        ) : index === active ? (

                                            <Typography

                                                color="#60A5FA"

                                                fontWeight={600}

                                            >

                                                Processing...

                                            </Typography>

                                        ) : (

                                            <Typography

                                                color="#6B7280"

                                            >

                                                Pending

                                            </Typography>

                                        )

                                    }

                                </Box>

                            </Paper>

                        </Fade>

                    ))

                }

            </Stack>

        </Paper>

    );

}