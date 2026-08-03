import {
    Paper,
    Box,
    Typography,
    Chip,
    Stack,
    Grid,
} from "@mui/material";

import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";

export default function CopilotHeader() {

    const candidateId = localStorage.getItem("candidate_id");

    const jobTitle =
        localStorage.getItem("job_title") ||
        "No Job Selected";

    return (

        <Paper

            elevation={0}

            sx={{

                position: "relative",

                overflow: "hidden",

                p: 5,

                borderRadius: 6,

                background:
                    "linear-gradient(135deg,#111827 0%,#172554 45%,#0F172A 100%)",

                border:
                    "1px solid rgba(255,255,255,.08)",

                backdropFilter: "blur(25px)",

            }}

        >

            {/* Background Glow */}

            <Box

                sx={{

                    position: "absolute",

                    width: 380,

                    height: 380,

                    borderRadius: "50%",

                    background:
                        "rgba(79,124,255,.18)",

                    filter: "blur(120px)",

                    right: -120,

                    top: -150,

                }}

            />

            <Grid

                container

                spacing={4}

                alignItems="center"

            >

                {/* Left */}

                <Grid

                    item

                    xs={12}

                    lg={8}

                >

                    <Box

                        display="flex"

                        alignItems="center"

                        gap={3}

                    >

                        <Box

                            sx={{

                                width: 75,

                                height: 75,

                                borderRadius: "22px",

                                bgcolor: "#4F7CFF",

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "center",

                                boxShadow:
                                    "0 0 35px rgba(79,124,255,.45)",

                            }}

                        >

                            <SmartToyRoundedIcon

                                sx={{

                                    fontSize: 42,

                                    color: "white",

                                }}

                            />

                        </Box>

                        <Box>

                            <Typography

                                variant="h3"

                                fontWeight={800}

                            >

                                AI Hiring Copilot

                            </Typography>

                            <Typography

                                sx={{

                                    color: "#CBD5E1",

                                    mt: 1,

                                    fontSize: 16,

                                    lineHeight: 1.8,

                                }}

                            >

                                Senior Hiring Manager powered by
                                LangGraph, RAG, FastAPI & Multi-Agent AI.

                            </Typography>

                        </Box>

                    </Box>

                    <Stack

                        direction="row"

                        spacing={2}

                        flexWrap="wrap"

                        useFlexGap

                        mt={4}

                    >

                        <Chip

                            icon={<HubRoundedIcon />}

                            label="LangGraph Active"

                            color="primary"

                        />

                        <Chip

                            icon={<PsychologyRoundedIcon />}

                            label="AI Decision Engine"

                            color="secondary"

                        />

                        <Chip

                            icon={<StorageRoundedIcon />}

                            label="RAG Connected"

                            color="info"

                        />

                        <Chip

                            icon={<CheckCircleRoundedIcon />}

                            label="System Online"

                            color="success"

                        />

                    </Stack>

                </Grid>

                {/* Right */}

                <Grid

                    item

                    xs={12}

                    lg={4}

                >

                    <Stack spacing={2}>

                        <Paper

                            elevation={0}

                            sx={{

                                p: 2.5,

                                borderRadius: 4,

                                bgcolor:
                                    "rgba(255,255,255,.05)",

                                backdropFilter:
                                    "blur(20px)",

                                border:
                                    "1px solid rgba(255,255,255,.06)",

                                transition: ".25s",

                                "&:hover": {

                                    transform:
                                        "translateY(-4px)",

                                    boxShadow:
                                        "0 0 25px rgba(79,124,255,.18)",

                                },

                            }}

                        >

                            <Box

                                display="flex"

                                alignItems="center"

                                gap={2}

                            >

                                <PersonRoundedIcon

                                    color="primary"

                                />

                                <Box>

                                    <Typography

                                        color="#94A3B8"

                                        fontSize={13}

                                    >

                                        Candidate

                                    </Typography>

                                    <Typography

                                        fontWeight={700}

                                    >

                                        ID : {candidateId}

                                    </Typography>

                                </Box>

                            </Box>

                        </Paper>

                        <Paper

                            elevation={0}

                            sx={{

                                p: 2.5,

                                borderRadius: 4,

                                bgcolor:
                                    "rgba(255,255,255,.05)",

                                backdropFilter:
                                    "blur(20px)",

                                border:
                                    "1px solid rgba(255,255,255,.06)",

                                transition: ".25s",

                                "&:hover": {

                                    transform:
                                        "translateY(-4px)",

                                    boxShadow:
                                        "0 0 25px rgba(79,124,255,.18)",

                                },

                            }}

                        >

                            <Box

                                display="flex"

                                alignItems="center"

                                gap={2}

                            >

                                <WorkRoundedIcon

                                    color="warning"

                                />

                                <Box>

                                    <Typography

                                        color="#94A3B8"

                                        fontSize={13}

                                    >

                                        Selected Job

                                    </Typography>

                                    <Typography

                                        fontWeight={700}

                                    >

                                        {jobTitle}

                                    </Typography>

                                </Box>

                            </Box>

                        </Paper>

                    </Stack>

                </Grid>

            </Grid>

        </Paper>

    );

}