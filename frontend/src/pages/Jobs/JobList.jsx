import {
    Box,
    Typography,
} from "@mui/material";

import {
    useEffect,
    useState,
} from "react";

import JobCard from "./JobCard";

export default function JobList({

    jobs,

}) {

    const [, forceUpdate] = useState(0);

    useEffect(() => {

        const handler = () =>

            forceUpdate(v => v + 1);

        window.addEventListener(

            "job-selected",

            handler

        );

        return () =>

            window.removeEventListener(

                "job-selected",

                handler

            );

    }, []);

    if (!jobs.length) {

        return (

            <Typography>

                No Jobs Found

            </Typography>

        );

    }

    return (

        <Box>

            {

                jobs.map(job => (

                    <JobCard

                        key={job.id}

                        job={job}

                    />

                ))

            }

        </Box>

    );

}