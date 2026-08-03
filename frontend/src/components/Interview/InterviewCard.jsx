import {

    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    Typography,

} from "@mui/material";

import QuestionCard from "./QuestionCard";

export default function InterviewCard({

    interview,

}) {

    return (

        <Card
            sx={{
                mt: 4,
                bgcolor: "#182230",
                color: "white",
                borderRadius: 5,
            }}
        >

            <CardContent>

                <Typography
                    variant="h5"
                    fontWeight={700}
                    mb={3}
                >
                    🎤 AI Interview Questions
                </Typography>

                <Grid
                    container
                    spacing={4}
                >

                    <Grid
                        item
                        xs={12}
                        md={6}
                    >

                        <Typography
                            variant="h6"
                            fontWeight={700}
                            mb={2}
                        >
                            💻 Technical Questions
                        </Typography>

                        {

                            interview.technical_questions.map(

                                (
                                    question,
                                    index
                                ) => (

                                    <QuestionCard

                                        key={index}

                                        question={question}

                                    />

                                )

                            )

                        }

                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={6}
                    >

                        <Typography
                            variant="h6"
                            fontWeight={700}
                            mb={2}
                        >
                            👨‍💼 HR Questions
                        </Typography>

                        {

                            interview.hr_questions.map(

                                (
                                    question,
                                    index
                                ) => (

                                    <QuestionCard

                                        key={index}

                                        question={question}

                                    />

                                )

                            )

                        }

                    </Grid>

                </Grid>

                <Divider
                    sx={{
                        my: 4,
                        bgcolor:
                            "rgba(255,255,255,.12)",
                    }}
                />

                <Box
                    display="flex"
                    gap={5}
                >

                    <Typography>

                        Candidate ID :

                        <b>

                            {" "}

                            {
                                interview.candidate_id
                            }

                        </b>

                    </Typography>

                    <Typography>

                        Job ID :

                        <b>

                            {" "}

                            {interview.job_id}

                        </b>

                    </Typography>

                </Box>

            </CardContent>

        </Card>

    );

}