import {
    Paper,
    Typography,
    Grid,
    Chip,
    Box,
    Divider,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PsychologyIcon from "@mui/icons-material/Psychology";

export default function ResumeAnalysis({ analysis }) {

    if (!analysis) return null;

    const candidate = analysis.candidate;

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
                🤖 Resume Analysis
            </Typography>

            <Grid container spacing={4}>

                {/* LEFT */}

                <Grid size={{ xs: 12, md: 6 }}>

                    <Typography variant="h6">
                        {candidate.name}
                    </Typography>

                    <Typography color="text.secondary">
                        {candidate.email}
                    </Typography>

                    <Typography color="text.secondary">
                        {candidate.phone}
                    </Typography>

                    <Divider sx={{ my: 3 }} />

                    <Typography
                        fontWeight={700}
                        mb={2}
                    >
                        Skills
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 1,
                        }}
                    >
                        {candidate.skills.map((skill) => (

                            <Chip
                                key={skill}
                                label={skill}
                                color="primary"
                            />

                        ))}
                    </Box>

                </Grid>

                {/* RIGHT */}

                <Grid size={{ xs: 12, md: 6 }}>

                    <Typography
                        fontWeight={700}
                        mb={2}
                    >
                        <SchoolIcon
                            sx={{
                                mr: 1,
                                verticalAlign: "middle",
                            }}
                        />

                        Education

                    </Typography>

                    {

                        candidate.education.map((edu, index) => (

                            <Box
                                key={index}
                                mb={3}
                            >

                                <Typography
                                    fontWeight={600}
                                >
                                    {edu.degree}
                                </Typography>

                                <Typography
                                    color="text.secondary"
                                >
                                    {edu.institution}
                                </Typography>

                                <Typography
                                    color="primary"
                                >
                                    CGPA : {edu.cgpa}
                                </Typography>

                            </Box>

                        ))

                    }

                    <Divider sx={{ my: 3 }} />

                    <Typography
                        fontWeight={700}
                        mb={2}
                    >

                        <WorkIcon
                            sx={{
                                mr: 1,
                                verticalAlign: "middle",
                            }}
                        />

                        Experience

                    </Typography>

                    {

                        candidate.experience.map((exp, index) => (

                            <Box
                                key={index}
                                mb={3}
                            >

                                <Typography
                                    fontWeight={600}
                                >
                                    {exp.role}
                                </Typography>

                                <Typography
                                    color="text.secondary"
                                >
                                    {exp.company}
                                </Typography>

                                <Typography
                                    variant="body2"
                                >
                                    {exp.start_date} - {exp.end_date}
                                </Typography>

                            </Box>

                        ))

                    }

                </Grid>

            </Grid>

            <Divider sx={{ my: 4 }} />

            <Typography
                fontWeight={700}
                mb={2}
            >
                🚀 Projects
            </Typography>

            {

                candidate.projects.map((project, index) => (

                    <Paper
                        key={index}
                        elevation={0}
                        sx={{
                            p: 2,
                            mb: 2,
                            borderRadius: 3,
                            background:
                                "rgba(255,255,255,.03)",
                        }}
                    >

                        <Typography
                            fontWeight={700}
                        >
                            {project.name}
                        </Typography>

                        <Typography
                            color="text.secondary"
                            mt={1}
                        >
                            {project.description}
                        </Typography>

                        <Box
                            mt={2}
                            sx={{
                                display: "flex",
                                gap: 1,
                                flexWrap: "wrap",
                            }}
                        >

                            {

                                project.tech_stack.map((tech) => (

                                    <Chip
                                        key={tech}
                                        label={tech}
                                        size="small"
                                        color="secondary"
                                    />

                                ))

                            }

                        </Box>

                    </Paper>

                ))

            }

            <Divider sx={{ my: 4 }} />

            <Typography
                fontWeight={700}
                mb={2}
            >
                <PsychologyIcon
                    sx={{
                        mr: 1,
                        verticalAlign: "middle",
                    }}
                />

                Certifications

            </Typography>

            {

                candidate.certifications.map((cert, index) => (

                    <Chip
                        key={index}
                        label={`${cert.name} • ${cert.issuer}`}
                        color="success"
                        sx={{ mr: 1, mb: 1 }}
                    />

                ))

            }

        </Paper>

    );

}