import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Chip,
    Stack,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MissingSkills({ skills }) {

    return (

        <>

            <Typography
                variant="h6"
                fontWeight={700}
                mb={2}
            >
                ❌ Missing Skills
            </Typography>

            {

                skills.map((item) => (

                    <Accordion
                        key={item.skill}
                        sx={{
                            mb: 1,
                            bgcolor: "#1B2538",
                        }}
                    >

                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >

                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                            >

                                <Typography>

                                    {item.skill}

                                </Typography>

                                <Chip
                                    label={item.priority}
                                    color={
                                        item.priority === "High"
                                            ? "error"
                                            : item.priority === "Medium"
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

                                <b>

                                    {" "}
                                    {item.estimated_time}

                                </b>

                            </Typography>

                            <Typography
                                mt={2}
                                fontWeight={700}
                            >
                                Resources
                            </Typography>

                            {

                                item.resources.map((resource) => (

                                    <Typography key={resource}>

                                        • {resource}

                                    </Typography>

                                ))

                            }

                        </AccordionDetails>

                    </Accordion>

                ))

            }

        </>

    );

}