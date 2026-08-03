import {
    Paper,
    Grid,
    Typography,
} from "@mui/material";

import ReadinessGauge from "./ReadinessGauge";
import MatchedSkills from "./MatchedSkills";
import MissingSkills from "./MissingSkills";
import Roadmap from "./Roadmap";

export default function SkillGapCard({ skillGap }) {

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

            <ReadinessGauge
                value={analysis.overall_readiness}
            />

            <Grid
                container
                spacing={4}
                sx={{
                    mt: 3,
                }}
            >

                <Grid
                    size={{
                        xs: 12,
                        md: 6,
                    }}
                >

                    <MatchedSkills
                        skills={
                            analysis.matched_skills
                        }
                    />

                </Grid>

                <Grid
                    size={{
                        xs: 12,
                        md: 6,
                    }}
                >

                    <MissingSkills
                        skills={
                            analysis.missing_skills
                        }
                    />

                </Grid>

            </Grid>

            <Roadmap
                roadmap={
                    analysis.roadmap
                }
            />

        </Paper>

    );

}