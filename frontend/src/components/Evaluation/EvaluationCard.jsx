import {
    Paper,
    Typography,
    Grid,
    Chip,
    Stack,
    Box,
    LinearProgress,
    Divider,
} from "@mui/material";

import PsychologyIcon from "@mui/icons-material/Psychology";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function EvaluationCard({

    evaluation,

}) {

    const data = evaluation.evaluation;

    if (!data) return null;

    return (

        <Paper
            elevation={0}
            sx={{
                mt: 4,
                p: 4,
                borderRadius: 5,
                background:
                    "linear-gradient(180deg,#151E2D,#101826)",
                border:
                    "1px solid rgba(255,255,255,.06)",
            }}
        >

            <Typography
                variant="h5"
                fontWeight={700}
                mb={4}
            >
                🧠 AI Candidate Evaluation
            </Typography>

            <Grid
                container
                spacing={4}
            >

                {/* Score */}

                <Grid
                    item
                    xs={12}
                    md={4}
                >

                    <Typography
                        fontWeight={700}
                        mb={1}
                    >
                        Overall Score
                    </Typography>

                    <LinearProgress
                        variant="determinate"
                        value={data.overall_score}
                        sx={{
                            height: 12,
                            borderRadius: 5,
                        }}
                    />

                    <Typography
                        mt={1}
                    >
                        {data.overall_score} / 100
                    </Typography>

                </Grid>

                {/* Recommendation */}

                <Grid
                    item
                    xs={12}
                    md={4}
                >

                    <Typography
                        fontWeight={700}
                        mb={2}
                    >
                        Recommendation
                    </Typography>

                    <Chip
                        icon={<EmojiEventsIcon />}
                        label={data.recommendation}
                        color="primary"
                    />

                </Grid>

                {/* Interview */}

                <Grid
                    item
                    xs={12}
                    md={4}
                >

                    <Typography
                        fontWeight={700}
                        mb={2}
                    >
                        Interview Ready
                    </Typography>

                    <Chip
                        icon={
                            data.interview_ready
                                ? <CheckCircleIcon />
                                : <CancelIcon />
                        }
                        color={
                            data.interview_ready
                                ? "success"
                                : "error"
                        }
                        label={
                            data.interview_ready
                                ? "Ready"
                                : "Not Ready"
                        }
                    />

                </Grid>

            </Grid>

            <Divider
                sx={{
                    my: 4,
                    borderColor:
                        "rgba(255,255,255,.08)",
                }}
            />

            <Grid
                container
                spacing={4}
            >

                {/* Strengths */}

                <Grid
                    item
                    xs={12}
                    md={6}
                >

                    <Typography
                        fontWeight={700}
                        mb={2}
                    >
                        💪 Strengths
                    </Typography>

                    <Stack spacing={1}>

                        {

                            data.strengths.map(

                                (item) => (

                                    <Typography
                                        key={item}
                                    >
                                        ✅ {item}
                                    </Typography>

                                )

                            )

                        }

                    </Stack>

                </Grid>

                {/* Weaknesses */}

                <Grid
                    item
                    xs={12}
                    md={6}
                >

                    <Typography
                        fontWeight={700}
                        mb={2}
                    >
                        ⚠ Weaknesses
                    </Typography>

                    <Stack spacing={1}>

                        {

                            data.weaknesses.map(

                                (item) => (

                                    <Typography
                                        key={item}
                                    >
                                        ❌ {item}
                                    </Typography>

                                )

                            )

                        }

                    </Stack>

                </Grid>

            </Grid>

            <Divider
                sx={{
                    my: 4,
                    borderColor:
                        "rgba(255,255,255,.08)",
                }}
            />

            <Box mb={4}>

                <Typography
                    fontWeight={700}
                    mb={2}
                >
                    ✅ Matched Skills
                </Typography>

                <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                >

                    {

                        data.matched_skills.map(

                            (skill) => (

                                <Chip
                                    key={skill}
                                    label={skill}
                                    color="success"
                                />

                            )

                        )

                    }

                </Stack>

            </Box>

            <Box>

                <Typography
                    fontWeight={700}
                    mb={2}
                >
                    ❌ Missing Skills
                </Typography>

                <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                >

                    {

                        data.missing_skills.map(

                            (skill) => (

                                <Chip
                                    key={skill}
                                    label={skill}
                                    color="error"
                                />

                            )

                        )

                    }

                </Stack>

            </Box>

        </Paper>

    );

}