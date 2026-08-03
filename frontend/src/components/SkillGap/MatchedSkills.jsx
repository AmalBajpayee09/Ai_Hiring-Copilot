import {
    Stack,
    Chip,
    Typography,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function MatchedSkills({ skills }) {

    return (

        <>

            <Typography
                variant="h6"
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

                    skills.map((skill) => (

                        <Chip
                            key={skill}
                            icon={<CheckCircleIcon />}
                            label={skill}
                            color="success"
                        />

                    ))

                }

            </Stack>

        </>

    );

}