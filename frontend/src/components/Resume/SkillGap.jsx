import {
    Paper,
    Typography,
    Box,
    Grid,
    Chip,
    LinearProgress,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Stack,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import SchoolIcon from "@mui/icons-material/School";

export default function SkillGap({ skillGap }) {

    if (!skillGap) return null;

    const analysis = skillGap.analysis;

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
                🎯 AI Skill Gap Analysis
            </Typography>

            {/* Overall */}

            <Typography mb={1}>
                Overall Readiness
            </Typography>

            <LinearProgress
                variant="determinate"
                value={analysis.overall_readiness}
                sx={{
                    height: 12,
                    borderRadius: 6,
                }}
            />

            <Typography
                mt={1}
                color="primary"
                fontWeight={700}
            >
                {analysis.overall_readiness}%
            </Typography>

            <Grid
                container
                spacing={4}
                mt={2}
            >

                {/* Matched */}

                <Grid
                    size={{ xs: 12, md: 6 }}
                >

                    <Typography
                        fontWeight={700}
                        mb={2}
                    >
                        ✅ Matched Skills
                    </Typography>

                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        gap={1}
                    >

                        {

                            analysis.matched_skills.map(

                                (skill) => (

                                    <Chip
                                        key={skill}
                                        icon={
                                            <CheckCircleIcon />
                                        }
                                        label={skill}
                                        color="success"
                                    />

                                )

                            )

                        }

                    </Stack>

                </Grid>

                {/* Missing */}

                <Grid
                    size={{ xs: 12, md: 6 }}
                >

                    <Typography
                        fontWeight={700}
                        mb={2}
                    >
                        ❌ Missing Skills
                    </Typography>

                    {

                        analysis.missing_skills.map(

                            (item) => (

                                <Accordion
                                    key={item.skill}
                                    sx={{
                                        mb: 1,
                                        bgcolor:
                                            "#1B2538",
                                    }}
                                >

                                    <AccordionSummary
                                        expandIcon={
                                            <ExpandMoreIcon />
                                        }
                                    >

                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            alignItems="center"
                                        >

                                            <CancelIcon
                                                color="error"
                                            />

                                            <Typography>

                                                {item.skill}

                                            </Typography>

                                            <Chip
                                                label={
                                                    item.priority
                                                }
                                                color={
                                                    item.priority ===
                                                        "High"

                                                        ? "error"

                                                        : item.priority ===
                                                            "Medium"

                                                            ? "warning"

                                                            : "success"
                                                }
                                                size="small"
                                            />

                                        </Stack>

                                    </AccordionSummary>

                                    <AccordionDetails>

                                        <Typography>

                                            Estimated Time :

                                            {" "}

                                            <b>

                                                {

                                                    item.estimated_time

                                                }

                                            </b>

                                        </Typography>

                                        <Typography
                                            mt={2}
                                            mb={1}
                                            fontWeight={700}
                                        >
                                            Resources
                                        </Typography>

                                        {

                                            item.resources.map(

                                                (

                                                    resource,

                                                    index

                                                ) => (

                                                    <Typography
                                                        key={
                                                            index
                                                        }
                                                    >

                                                        • {resource}

                                                    </Typography>

                                                )

                                            )

                                        }

                                    </AccordionDetails>

                                </Accordion>

                            )

                        )

                    }

                </Grid>

            </Grid>

            {/* Roadmap */}

            <Box mt={5}>

                <Typography
                    variant="h6"
                    fontWeight={700}
                    mb={3}
                >
                    📚 Learning Roadmap
                </Typography>

                {

                    analysis.roadmap.map(

                        (step, index) => (

                            <Paper
                                key={index}
                                elevation={0}
                                sx={{
                                    p: 2,
                                    mb: 2,
                                    bgcolor:
                                        "#1B2538",
                                    borderRadius: 3,
                                }}
                            >

                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >

                                    <SchoolIcon
                                        color="primary"
                                    />

                                    <Typography>

                                        {index + 1}. {step}

                                    </Typography>

                                </Stack>

                            </Paper>

                        )

                    )

                }

            </Box>

        </Paper>

    );

}