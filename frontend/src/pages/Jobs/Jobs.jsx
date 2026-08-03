import {

    useEffect,

} from "react";

import {

    Box,
    Typography,
    CircularProgress,
    Alert,

} from "@mui/material";

import useJobs from "../../hooks/useJobs";

import JobForm from "../../pages/Jobs/JobForm";

import JobList from "../../pages/Jobs/JobList";

export default function Jobs() {

    const {

        jobs,

        loading,

        error,

        fetchJobs,

        addJob,

    } = useJobs();

    useEffect(() => {

        fetchJobs();

    }, []);

    async function handleCreate(job) {

        await addJob(job);

    }

    return (

        <Box

            sx={{

                px: 4,

                py: 4,

                minHeight: "100vh",

                background: "#070B14",

            }}

        >

            <Typography

                variant="h4"

                fontWeight={700}

                mb={4}

            >

                💼 Jobs

            </Typography>

            <JobForm

                onCreate={handleCreate}

            />

            {

                loading && (

                    <CircularProgress />

                )

            }

            {

                error && (

                    <Alert

                        severity="error"

                        sx={{

                            mt: 3,

                        }}

                    >

                        {error}

                    </Alert>

                )

            }

            <Typography

                variant="h5"

                fontWeight={700}

                mb={3}

            >

                Available Jobs

            </Typography>

            <JobList

                jobs={jobs}

            />

        </Box>

    );

}