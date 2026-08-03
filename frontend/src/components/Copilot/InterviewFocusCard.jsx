import {
    Paper,
    Typography,
    Chip,
    Stack,
    Fade,
    Box,
} from "@mui/material";

import TrackChangesRoundedIcon from "@mui/icons-material/TrackChangesRounded";

export default function InterviewFocusCard({

    decision,

}) {

    return (

        <Fade

            in

            timeout={1100}

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

                <Box

                    display="flex"

                    alignItems="center"

                    gap={2}

                    mb={1}

                >

                    <TrackChangesRoundedIcon

                        sx={{

                            color: "#4F7CFF",

                            fontSize: 34,

                        }}

                    />

                    <Typography

                        variant="h5"

                        fontWeight={700}

                    >

                        Interview Focus Areas

                    </Typography>

                </Box>

                <Typography

                    color="#94A3B8"

                    mb={4}

                >

                    The AI recommends prioritizing these topics during the
                    interview to validate the candidate's technical depth and
                    problem-solving ability.

                </Typography>

                <Stack

                    direction="row"

                    spacing={2}

                    flexWrap="wrap"

                    useFlexGap

                >

                    {

                        decision.interview_focus.map(

                            (

                                item,

                                index

                            ) => (

                                <Chip

                                    key={index}

                                    label={item}

                                    clickable

                                    color="primary"

                                    sx={{

                                        px: 2,

                                        py: 3,

                                        fontSize: 15,

                                        fontWeight: 600,

                                        borderRadius: 3,

                                        transition: ".25s",

                                        "&:hover": {

                                            transform:

                                                "translateY(-3px)",

                                            boxShadow:

                                                "0 0 20px rgba(79,124,255,.25)",

                                        },

                                    }}

                                />

                            )

                        )

                    }

                </Stack>

            </Paper>

        </Fade>

    );

}