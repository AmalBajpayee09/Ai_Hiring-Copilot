import {

    Accordion,
    AccordionSummary,
    AccordionDetails,

    Box,
    Chip,
    Typography,

} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function QuestionCard({

    question,

}) {

    const difficultyColor = {

        Easy: "success",

        Medium: "warning",

        Hard: "error",

    };

    return (

        <Accordion
            sx={{
                bgcolor: "#202938",
                color: "white",
                mb: 2,
                borderRadius: 2,
                "&:before": {
                    display: "none",
                },
            }}
        >

            <AccordionSummary
                expandIcon={
                    <ExpandMoreIcon
                        sx={{ color: "white" }}
                    />
                }
            >

                <Box>

                    <Typography
                        fontWeight={700}
                    >
                        {question.question}
                    </Typography>

                    <Box
                        mt={1}
                        display="flex"
                        gap={1}
                    >

                        <Chip

                            size="small"

                            label={
                                question.category
                            }

                            color="primary"

                        />

                        <Chip

                            size="small"

                            label={
                                question.difficulty
                            }

                            color={
                                difficultyColor[
                                question.difficulty
                                ]
                            }

                        />

                    </Box>

                </Box>

            </AccordionSummary>

            <AccordionDetails>

                <Typography
                    fontWeight={700}
                    mb={1}
                >

                    Expected Answer

                </Typography>

                <Typography>

                    {question.expected_answer}

                </Typography>

            </AccordionDetails>

        </Accordion>

    );

}