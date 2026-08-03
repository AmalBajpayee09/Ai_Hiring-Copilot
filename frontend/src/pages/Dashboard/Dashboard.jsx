import {
    Box,
    Grid,
    Typography,
    Button,
    Stack,
    Paper,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import SmartToyIcon from "@mui/icons-material/SmartToy";

import Hero from "../../components/Hero/Hero";
import StatsCards from "../../components/Stats/StatsCards";
import HiringChart from "../../components/Charts/HiringChart";

export default function Dashboard() {

    return (

        <Box
            sx={{
                // ml: "280px",
                // mt: "72px",

                px: 4,
                py: 4,

                width: "calc(100% - 280px)",
                minHeight: "calc(100vh - 72px)",

                background: "#070B14",

                overflowX: "hidden",
            }}
        >

            {/* ================= HERO ================= */}

            <Hero />

            <Box sx={{ height: 28 }} />

            {/* ================= STATS ================= */}

            <StatsCards />

            <Box sx={{ height: 28 }} />

            {/* ================= ROW 1 ================= */}

            <Grid
                container
                spacing={2.5}
            >

                {/* Hiring Analytics */}

                <Grid
                    size={{ xs: 12, lg: 8 }}
                >

                    <HiringChart />

                </Grid>

                {/* AI Copilot */}

                <Grid
                    size={{ xs: 12, lg: 4 }}
                >

                    <Paper
                        elevation={0}
                        sx={{

                            height: 520,

                            p: 3,

                            borderRadius: "28px",

                            background:
                                "linear-gradient(180deg,#151F31,#101826)",

                            border:
                                "1px solid rgba(255,255,255,.06)",

                            boxShadow:
                                "0 15px 45px rgba(0,0,0,.35)",

                            display: "flex",

                            flexDirection: "column",

                        }}
                    >

                        <Typography
                            variant="h5"
                            fontWeight={700}
                        >
                            🤖 AI Copilot
                        </Typography>

                        <Typography
                            sx={{
                                mt: 1,
                                color: "#94A3B8",
                            }}
                        >
                            Your AI hiring assistant
                        </Typography>

                        <Stack
                            spacing={2}
                            sx={{
                                mt: 4,
                            }}
                        >

                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<AddIcon />}
                            >
                                Add Candidate
                            </Button>

                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<SmartToyIcon />}
                            >
                                Launch Copilot
                            </Button>

                        </Stack>

                        <Paper
                            elevation={0}
                            sx={{

                                mt: "auto",

                                p: 3,

                                borderRadius: 4,

                                background:
                                    "rgba(79,124,255,.12)",

                                border:
                                    "1px solid rgba(79,124,255,.25)",

                            }}
                        >

                            <Typography
                                fontWeight={700}
                                mb={2}
                            >
                                AI Recommendation
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#CBD5E1",
                                    lineHeight: 2,
                                }}
                            >
                                ✅ Resume Parsing
                                <br />
                                ✅ LangGraph Memory
                                <br />
                                ✅ Redis Cache
                                <br />
                                ✅ RAG Search
                                <br />
                                ✅ AI Copilot Ready
                            </Typography>

                        </Paper>

                    </Paper>

                </Grid>

            </Grid>

            <Box sx={{ height: 28 }} />

            {/* ================= ROW 2 ================= */}

            <Grid
                container
                spacing={2.5}
            >

                <Grid
                    size={{ xs: 12, lg: 8 }}
                >

                    {/* Recent Candidates */}

                </Grid>

                <Grid
                    size={{ xs: 12, lg: 4 }}
                >

                    {/* AI Activity Timeline */}

                </Grid>

            </Grid>

            <Box sx={{ height: 28 }} />

            {/* ================= ROW 3 ================= */}

            <Grid
                container
                spacing={2.5}
            >

                <Grid
                    size={{ xs: 12, lg: 6 }}
                >

                    {/* Hiring Pipeline */}

                </Grid>

                <Grid
                    size={{ xs: 12, lg: 6 }}
                >

                    {/* Upcoming Interviews */}

                </Grid>

            </Grid>

        </Box>

    );

}