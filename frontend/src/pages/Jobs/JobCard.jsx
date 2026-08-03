import {
    Card,
    CardContent,
    Typography,
    Button,
    Stack,
    Chip,
} from "@mui/material";

export default function JobCard({ job }) {

    const selectedJob = Number(
        localStorage.getItem("job_id")
    );

    const isSelected =
        selectedJob === job.id;

    function handleSelect() {

        localStorage.setItem(
            "job_id",
            job.id
        );

        localStorage.setItem(
            "job_title",
            job.title
        );

        window.dispatchEvent(
            new Event("job-selected")
        );

    }

    return (

        <Card
            sx={{

                mb: 3,

                background: "#111827",

                borderRadius: 5,

                border: isSelected
                    ? "2px solid #4F7CFF"
                    : "1px solid rgba(255,255,255,.06)",

                boxShadow: isSelected
                    ? "0 0 25px rgba(79,124,255,.35)"
                    : "none",

                transition: "all .25s ease",

            }}
        >

            <CardContent>

                {

                    isSelected && (

                        <Chip
                            label="Selected"
                            color="primary"
                            sx={{ mb: 2 }}
                        />

                    )

                }

                <Typography
                    variant="h5"
                    fontWeight={700}
                >

                    {job.title}

                </Typography>

                <Typography
                    color="primary"
                    mb={2}
                >

                    {job.company}

                </Typography>

                <Typography
                    sx={{
                        color: "#CBD5E1",
                        lineHeight: 1.8,
                    }}
                >

                    {job.description}

                </Typography>

                <Stack
                    direction="row"
                    mt={3}
                >

                    <Button
                        variant={
                            isSelected
                                ? "outlined"
                                : "contained"
                        }
                        onClick={handleSelect}
                    >

                        {

                            isSelected
                                ? "Selected"
                                : "Use Job"

                        }

                    </Button>

                </Stack>

            </CardContent>

        </Card>

    );

}