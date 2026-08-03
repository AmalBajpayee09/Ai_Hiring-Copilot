import { useState } from "react";

import {
    Drawer,
    Box,
    Typography,
    TextField,
    Button,
    Stack,
} from "@mui/material";

export default function CandidateDrawer({

    open,
    onClose,
    onSave,

}) {

    const [form, setForm] = useState({

        name: "",
        email: "",
        experience: "",

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value,

        });

    };

    const handleSubmit = () => {

        onSave({

            ...form,

            id: Date.now(),

            resumeScore: 0,

            aiScore: 0,

            status: "Pending",

        });

        setForm({

            name: "",
            email: "",
            experience: "",

        });

        onClose();

    };

    return (

        <Drawer

            anchor="right"

            open={open}

            onClose={onClose}

        >

            <Box

                sx={{

                    width: 420,

                    p: 4,

                    height: "100%",

                    background: "#101826",

                }}

            >

                <Typography

                    variant="h5"

                    mb={4}

                    fontWeight={700}

                >

                    Add Candidate

                </Typography>

                <Stack spacing={3}>

                    <TextField

                        label="Name"

                        name="name"

                        value={form.name}

                        onChange={handleChange}

                    />

                    <TextField

                        label="Email"

                        name="email"

                        value={form.email}

                        onChange={handleChange}

                    />

                    <TextField

                        label="Experience"

                        name="experience"

                        value={form.experience}

                        onChange={handleChange}

                    />

                    <Button

                        variant="contained"

                        size="large"

                        onClick={handleSubmit}

                    >

                        Save Candidate

                    </Button>

                </Stack>

            </Box>

        </Drawer>

    );

}