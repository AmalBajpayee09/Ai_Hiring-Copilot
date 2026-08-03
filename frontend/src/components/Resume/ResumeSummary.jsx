import {

    Paper,

    Typography,

    Grid,

    Chip,

    Divider,

    Box,

} from "@mui/material";

export default function ResumeSummary({ summary }) {

    if (!summary) return null;

    const data = summary.summary;

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

                mb={3}

            >

                📝 AI Resume Summary

            </Typography>

            <Typography variant="h6">

                {data.headline}

            </Typography>

            <Typography

                mt={2}

                color="text.secondary"

            >

                {data.overall_summary}

            </Typography>

            <Divider sx={{ my: 3 }} />

            <Grid container spacing={3}>

                <Grid size={{ xs: 12, md: 6 }}>

                    <Typography fontWeight={700}>

                        Experience

                    </Typography>

                    <Typography mt={1}>

                        {data.experience}

                    </Typography>

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <Typography fontWeight={700}>

                        Education

                    </Typography>

                    <Typography mt={1}>

                        {data.education}

                    </Typography>

                </Grid>

            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography

                fontWeight={700}

                mb={2}

            >

                Top Skills

            </Typography>

            <Box

                sx={{

                    display: "flex",

                    gap: 1,

                    flexWrap: "wrap",

                }}

            >

                {

                    data.top_skills.map((skill) => (

                        <Chip

                            key={skill}

                            label={skill}

                            color="primary"

                        />

                    ))

                }

            </Box>

            <Divider sx={{ my: 3 }} />

            <Grid container spacing={3}>

                <Grid size={{ xs: 12, md: 6 }}>

                    <Typography

                        fontWeight={700}

                        color="success.main"

                    >

                        Strengths

                    </Typography>

                    {

                        data.strengths.map((item) => (

                            <Typography

                                key={item}

                                mt={1}

                            >

                                ✅ {item}

                            </Typography>

                        ))

                    }

                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>

                    <Typography

                        fontWeight={700}

                        color="warning.main"

                    >

                        Weaknesses

                    </Typography>

                    {

                        data.weaknesses.map((item) => (

                            <Typography

                                key={item}

                                mt={1}

                            >

                                ⚠️ {item}

                            </Typography>

                        ))

                    }

                </Grid>

            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography

                variant="h6"

                color="primary"

            >

                Hiring Decision

            </Typography>

            <Typography

                fontWeight={700}

                mt={1}

            >

                {data.hire_decision}

            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography

                variant="h6"

                gutterBottom

            >

                🎤 Elevator Pitch

            </Typography>

            <Typography

                color="text.secondary"

            >

                {data.elevator_pitch}

            </Typography>

        </Paper>

    );

}