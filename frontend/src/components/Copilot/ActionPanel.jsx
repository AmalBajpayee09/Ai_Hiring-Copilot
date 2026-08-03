import {
    Paper,
    Typography,
    Grid,
    Button,
    Fade,
    Box,
} from "@mui/material";

import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";

import { useNavigate } from "react-router-dom";

export default function ActionPanel() {

    const navigate = useNavigate();

    const actions = [

        {

            title: "AI Interview",

            subtitle: "Generate technical & HR interview questions",

            icon: <QuizRoundedIcon sx={{ fontSize: 36 }} />,

            color: "#4F7CFF",

            route: "/interview",

        },

        {

            title: "Evaluation",

            subtitle: "Open candidate evaluation report",

            icon: <DescriptionRoundedIcon sx={{ fontSize: 36 }} />,

            color: "#22C55E",

            route: "/evaluation",

        },

        {

            title: "Resume AI Chat",

            subtitle: "Ask questions using RAG",

            icon: <ChatRoundedIcon sx={{ fontSize: 36 }} />,

            color: "#A855F7",

            route: "/chat",

        },

        {

            title: "Skill Gap",

            subtitle: "Review missing skills",

            icon: <PsychologyRoundedIcon sx={{ fontSize: 36 }} />,

            color: "#F59E0B",

            route: "/resume",

        },

        {

            title: "Upload Resume",

            subtitle: "Analyze another candidate",

            icon: <UploadFileRoundedIcon sx={{ fontSize: 36 }} />,

            color: "#06B6D4",

            route: "/resume",

        },

    ];

    return (

        <Fade

            in

            timeout={1200}

        >

            <Paper

                elevation={0}

                sx={{

                    mt: 4,

                    p: 4,

                    borderRadius: 5,

                    background:

                        "rgba(17,24,39,.75)",

                    backdropFilter:

                        "blur(18px)",

                    border:

                        "1px solid rgba(255,255,255,.06)",

                }}

            >

                <Typography

                    variant="h5"

                    fontWeight={700}

                    mb={1}

                >

                    🚀 Continue Recruitment Workflow

                </Typography>

                <Typography

                    color="#94A3B8"

                    mb={4}

                >

                    Continue the hiring process with AI-powered tools.

                </Typography>

                <Grid

                    container

                    spacing={3}

                >

                    {

                        actions.map((action) => (

                            <Grid

                                item

                                xs={12}

                                sm={6}

                                md={4}

                                key={action.title}

                            >

                                <Paper

                                    elevation={0}

                                    sx={{

                                        p: 3,

                                        borderRadius: 4,

                                        height: "100%",

                                        cursor: "pointer",

                                        bgcolor: "#0F172A",

                                        border:

                                            "1px solid rgba(255,255,255,.05)",

                                        transition: ".3s",

                                        "&:hover": {

                                            transform:

                                                "translateY(-6px)",

                                            border:

                                                `1px solid ${action.color}`,

                                            boxShadow:

                                                `0 0 25px ${action.color}33`,

                                        },

                                    }}

                                >

                                    <Box

                                        sx={{

                                            width: 62,

                                            height: 62,

                                            borderRadius: 3,

                                            bgcolor:

                                                `${action.color}22`,

                                            display: "flex",

                                            alignItems: "center",

                                            justifyContent: "center",

                                            color: action.color,

                                            mb: 3,

                                        }}

                                    >

                                        {

                                            action.icon

                                        }

                                    </Box>

                                    <Typography

                                        variant="h6"

                                        fontWeight={700}

                                    >

                                        {

                                            action.title

                                        }

                                    </Typography>

                                    <Typography

                                        color="#94A3B8"

                                        mt={1}

                                        mb={3}

                                        lineHeight={1.7}

                                    >

                                        {

                                            action.subtitle

                                        }

                                    </Typography>

                                    <Button

                                        fullWidth

                                        variant="contained"

                                        onClick={() =>

                                            navigate(

                                                action.route

                                            )

                                        }

                                        sx={{

                                            borderRadius: 3,

                                            py: 1.2,

                                            fontWeight: 700,

                                            textTransform: "none",

                                            bgcolor:

                                                action.color,

                                            "&:hover": {

                                                bgcolor:

                                                    action.color,

                                                opacity: .9,

                                            },

                                        }}

                                    >

                                        Open

                                    </Button>

                                </Paper>

                            </Grid>

                        ))

                    }

                </Grid>

            </Paper>

        </Fade>

    );

}