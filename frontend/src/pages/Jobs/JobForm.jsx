import { useState } from "react";

import {

    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Stack,

} from "@mui/material";

export default function JobForm({

    onCreate,

}) {

    const [title, setTitle] = useState("");

    const [company, setCompany] = useState("");

    const [description, setDescription] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();

        if (

            !title ||

            !company ||

            !description

        ) return;

        await onCreate({

            title,

            company,

            description,

        });

        setTitle("");

        setCompany("");

        setDescription("");

    }

    return (

        <Card

            sx={{

                mb: 4,

                background: "#111827",

                borderRadius: 5,

                border: "1px solid rgba(255,255,255,.06)",

            }}

        >

            <CardContent>

                <Typography

                    variant="h5"

                    fontWeight={700}

                    mb={3}

                >

                    ➕ Create Job

                </Typography>

                <Stack

                    component="form"

                    spacing={3}

                    onSubmit={handleSubmit}

                >

                    <TextField

                        label="Job Title"

                        value={title}

                        onChange={(e) =>

                            setTitle(e.target.value)

                        }

                        fullWidth

                    />

                    <TextField

                        label="Company"

                        value={company}

                        onChange={(e) =>

                            setCompany(e.target.value)

                        }

                        fullWidth

                    />

                    <TextField

                        label="Job Description"

                        multiline

                        rows={5}

                        value={description}

                        onChange={(e) =>

                            setDescription(e.target.value)

                        }

                        fullWidth

                    />

                    <Button

                        type="submit"

                        variant="contained"

                        size="large"

                    >

                        Create Job

                    </Button>

                </Stack>

            </CardContent>

        </Card>

    );

}