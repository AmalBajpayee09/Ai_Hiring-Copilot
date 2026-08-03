import {
    Box,
    Typography,
    Button,
    Stack,
} from "@mui/material";

import {
    Add,
    SmartToy,
    ArrowOutward,
} from "@mui/icons-material";

import { motion } from "framer-motion";

export default function Hero() {

    return (

        <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
        >

            <Box

                sx={{

                    position: "relative",

                    overflow: "hidden",

                    borderRadius: "34px",

                    p: 5,

                    background:
                        "linear-gradient(135deg,#111827 0%,#1B2540 45%,#4F46E5 100%)",

                    border:
                        "1px solid rgba(255,255,255,.08)",

                    boxShadow:
                        "0 30px 60px rgba(0,0,0,.45)",

                }}

            >

                {/* Glow */}

                <Box

                    sx={{

                        position: "absolute",

                        width: 320,

                        height: 320,

                        borderRadius: "50%",

                        right: -80,

                        top: -120,

                        background:
                            "rgba(79,124,255,.25)",

                        filter: "blur(70px)",

                    }}

                />

                <Typography

                    variant="h2"

                    fontWeight={800}

                    color="white"

                >

                    Good Evening 👋

                </Typography>

                <Typography

                    sx={{

                        mt: 1,

                        color: "#CBD5E1",

                        fontSize: 18,

                    }}

                >

                    Intelligent Hiring Platform powered by AI

                </Typography>

                <Typography

                    sx={{

                        mt: 2,

                        color: "#60A5FA",

                        fontWeight: 700,

                    }}

                >

                    FastAPI • LangGraph • Redis • RAG • AI Copilot

                </Typography>

                <Stack

                    direction="row"

                    spacing={2}

                    mt={5}

                >

                    <Button

                        variant="contained"

                        startIcon={<Add />}

                        sx={{

                            px: 4,

                            py: 1.4,

                            borderRadius: 4,

                            textTransform: "none",

                            fontWeight: 700,

                        }}

                    >

                        Add Candidate

                    </Button>

                    <Button

                        variant="outlined"

                        startIcon={<SmartToy />}

                        endIcon={<ArrowOutward />}

                        sx={{

                            px: 4,

                            py: 1.4,

                            borderRadius: 4,

                            color: "white",

                            borderColor:
                                "rgba(255,255,255,.25)",

                            textTransform: "none",

                            "&:hover": {

                                borderColor: "#60A5FA",

                            }

                        }}

                    >

                        Launch AI Copilot

                    </Button>

                </Stack>

            </Box>

        </motion.div>

    );

}