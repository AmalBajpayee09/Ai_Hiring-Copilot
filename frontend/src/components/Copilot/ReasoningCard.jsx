import {
    Paper,
    Typography,
    Box,
    Fade,
} from "@mui/material";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

export default function ReasoningCard({

    decision,

}) {

    return (

        <Fade

            in

            timeout={1000}

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

                    mb={4}

                >

                    🧠 AI Decision Reasoning

                </Typography>

                {

                    decision.reasoning.map(

                        (

                            item,

                            index

                        ) => (

                            <Box

                                key={index}

                                sx={{

                                    display: "flex",

                                    gap: 3,

                                    position: "relative",

                                    mb:

                                        index ===

                                            decision.reasoning.length - 1

                                            ? 0

                                            : 4,

                                }}

                            >

                                {/* Timeline */}

                                <Box

                                    sx={{

                                        display: "flex",

                                        flexDirection: "column",

                                        alignItems: "center",

                                    }}

                                >

                                    <Box

                                        sx={{

                                            width: 42,

                                            height: 42,

                                            borderRadius: "50%",

                                            bgcolor:

                                                "#4F7CFF",

                                            display: "flex",

                                            alignItems: "center",

                                            justifyContent: "center",

                                            color: "white",

                                            boxShadow:

                                                "0 0 18px rgba(79,124,255,.35)",

                                        }}

                                    >

                                        <AutoAwesomeRoundedIcon />

                                    </Box>

                                    {

                                        index !==

                                        decision.reasoning.length - 1 && (

                                            <Box

                                                sx={{

                                                    width: 2,

                                                    flex: 1,

                                                    minHeight: 50,

                                                    bgcolor:

                                                        "rgba(79,124,255,.35)",

                                                }}

                                            />

                                        )

                                    }

                                </Box>

                                {/* Content */}

                                <Paper

                                    elevation={0}

                                    sx={{

                                        flex: 1,

                                        p: 2.5,

                                        borderRadius: 3,

                                        bgcolor:

                                            "#0F172A",

                                        border:

                                            "1px solid rgba(255,255,255,.05)",

                                        transition: ".25s",

                                        "&:hover": {

                                            transform:

                                                "translateX(6px)",

                                            border:

                                                "1px solid rgba(79,124,255,.25)",

                                            boxShadow:

                                                "0 0 20px rgba(79,124,255,.12)",

                                        },

                                    }}

                                >

                                    <Typography

                                        fontWeight={700}

                                        color="#60A5FA"

                                        mb={1}

                                    >

                                        Step {index + 1}

                                    </Typography>

                                    <Typography

                                        color="#CBD5E1"

                                        lineHeight={1.8}

                                    >

                                        {item}

                                    </Typography>

                                </Paper>

                            </Box>

                        )

                    )

                }

            </Paper>

        </Fade>

    );

}