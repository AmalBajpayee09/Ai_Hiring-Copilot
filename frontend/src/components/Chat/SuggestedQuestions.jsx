import {
    Box,
    Typography,
    Chip,
    Stack,
} from "@mui/material";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const questions = [

    "Tech Stack",

    "Projects",

    "Skills",

    "Experience",

    "Education",

    "Certifications",

    "Strengths",

    "Weaknesses",

];

export default function SuggestedQuestions({

    onAsk,

}) {

    return (

        <Box
            sx={{
                mt: 3,
                mb: 4,
            }}
        >

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 2,
                }}
            >

                <AutoAwesomeRoundedIcon
                    sx={{
                        color: "#4F7CFF",
                    }}
                />

                <Typography
                    fontWeight={700}
                    color="#CBD5E1"
                >
                    Suggested Questions
                </Typography>

            </Box>

            <Stack
                direction="row"
                flexWrap="wrap"
                gap={1.5}
            >

                {

                    questions.map((question) => (

                        <Chip

                            key={question}

                            label={question}

                            clickable

                            onClick={() =>

                                onAsk(question)

                            }

                            sx={{

                                px: 1,

                                py: 2.7,

                                borderRadius: "14px",

                                fontWeight: 600,

                                color: "#E5E7EB",

                                background:
                                    "linear-gradient(135deg,#1E293B,#111827)",

                                border:
                                    "1px solid rgba(255,255,255,.08)",

                                transition: ".25s",

                                "&:hover": {

                                    transform:

                                        "translateY(-3px)",

                                    background:
                                        "linear-gradient(135deg,#2563EB,#4F7CFF)",

                                    color: "#FFF",

                                    boxShadow:
                                        "0 10px 25px rgba(79,124,255,.35)",

                                },

                            }}

                        />

                    ))

                }

            </Stack>

        </Box>

    );

}