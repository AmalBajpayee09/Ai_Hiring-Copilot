import {
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";

export default function Roadmap({ roadmap }) {

    return (

        <>

            <Typography
                variant="h6"
                fontWeight={700}
                mb={3}
            >
                📚 Learning Roadmap
            </Typography>

            {

                roadmap.map((step, index) => (

                    <Paper
                        key={index}
                        elevation={0}
                        sx={{
                            p: 2,
                            mb: 2,
                            bgcolor: "#1B2538",
                            borderRadius: 3,
                        }}
                    >

                        <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                        >

                            <SchoolIcon color="primary" />

                            <Typography>

                                {index + 1}. {step}

                            </Typography>

                        </Stack>

                    </Paper>

                ))

            }

        </>

    );

}