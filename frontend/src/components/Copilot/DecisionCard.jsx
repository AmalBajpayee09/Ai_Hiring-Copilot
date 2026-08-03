import {
    Paper,
    Box,
    Typography,
    Grid,
    LinearProgress,
    Chip,
    Fade,
} from "@mui/material";

import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

export default function DecisionCard({

    decision,

}) {

    const confidence = decision.confidence ?? 0;

    const decisionColor =

        decision.decision === "Strong Hire"

            ? "#22C55E"

            : decision.decision === "Hire"

                ? "#3B82F6"

                : decision.decision === "Hold"

                    ? "#F59E0B"

                    : "#EF4444";

    const riskColor =

        decision.risk === "Low"

            ? "success"

            : decision.risk === "Medium"

                ? "warning"

                : "error";

    return (

        <Fade

            in

            timeout={900}

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

                    variant="h4"

                    fontWeight={700}

                    mb={4}

                >

                    🤖 Final AI Hiring Decision

                </Typography>

                <Grid

                    container

                    spacing={3}

                >

                    {/* Decision */}

                    <Grid

                        item

                        xs={12}

                        md={4}

                    >

                        <Paper

                            elevation={0}

                            sx={{

                                p: 4,

                                height: "100%",

                                borderRadius: 4,

                                bgcolor:

                                    "#0F172A",

                                textAlign: "center",

                                transition: ".3s",

                                border:

                                    "1px solid rgba(255,255,255,.05)",

                                "&:hover": {

                                    transform:

                                        "translateY(-5px)",

                                    boxShadow:

                                        "0 0 30px rgba(79,124,255,.20)",

                                },

                            }}

                        >

                            <WorkspacePremiumRoundedIcon

                                sx={{

                                    fontSize: 70,

                                    color: decisionColor,

                                }}

                            />

                            <Typography

                                mt={2}

                                variant="h4"

                                fontWeight={700}

                            >

                                {

                                    decision.decision

                                }

                            </Typography>

                            <Chip

                                icon={

                                    <VerifiedRoundedIcon />

                                }

                                label="AI Recommendation"

                                sx={{

                                    mt: 2,

                                    bgcolor:

                                        `${decisionColor}22`,

                                    color:

                                        decisionColor,

                                    fontWeight: 700,

                                }}

                            />

                        </Paper>

                    </Grid>

                    {/* Confidence */}

                    <Grid

                        item

                        xs={12}

                        md={4}

                    >

                        <Paper

                            elevation={0}

                            sx={{

                                p: 4,

                                height: "100%",

                                borderRadius: 4,

                                bgcolor:

                                    "#0F172A",

                                transition: ".3s",

                                border:

                                    "1px solid rgba(255,255,255,.05)",

                                "&:hover": {

                                    transform:

                                        "translateY(-5px)",

                                    boxShadow:

                                        "0 0 30px rgba(79,124,255,.20)",

                                },

                            }}

                        >

                            <Typography

                                color="#94A3B8"

                            >

                                AI Confidence

                            </Typography>

                            <Typography

                                variant="h2"

                                fontWeight={800}

                                color="#4F7CFF"

                                mt={1}

                            >

                                {confidence}%

                            </Typography>

                            <LinearProgress

                                variant="determinate"

                                value={confidence}

                                sx={{

                                    mt: 3,

                                    height: 12,

                                    borderRadius: 6,

                                }}

                            />

                            <Typography

                                mt={2}

                                color="#94A3B8"

                            >

                                Higher confidence indicates stronger alignment between candidate profile and job requirements.

                            </Typography>

                        </Paper>

                    </Grid>

                    {/* Risk */}

                    <Grid

                        item

                        xs={12}

                        md={4}

                    >

                        <Paper

                            elevation={0}

                            sx={{

                                p: 4,

                                height: "100%",

                                borderRadius: 4,

                                bgcolor:

                                    "#0F172A",

                                transition: ".3s",

                                border:

                                    "1px solid rgba(255,255,255,.05)",

                                "&:hover": {

                                    transform:

                                        "translateY(-5px)",

                                    boxShadow:

                                        "0 0 30px rgba(79,124,255,.20)",

                                },

                            }}

                        >

                            <Typography

                                color="#94A3B8"

                                mb={2}

                            >

                                Hiring Risk

                            </Typography>

                            <Chip

                                color={riskColor}

                                icon={

                                    <WarningAmberRoundedIcon />

                                }

                                label={

                                    decision.risk

                                }

                                sx={{

                                    fontSize: 15,

                                    px: 1,

                                    fontWeight: 700,

                                }}

                            />

                            <Box mt={4}>

                                <Typography

                                    color="#94A3B8"

                                >

                                    Suggested Salary

                                </Typography>

                                <Box

                                    display="flex"

                                    alignItems="center"

                                    gap={1}

                                    mt={1}

                                >

                                    <MonetizationOnRoundedIcon

                                        color="success"

                                    />

                                    <Typography

                                        variant="h6"

                                        fontWeight={700}

                                    >

                                        {

                                            decision.salary_range

                                        }

                                    </Typography>

                                </Box>

                            </Box>

                        </Paper>

                    </Grid>

                </Grid>

            </Paper>

        </Fade>

    );

}