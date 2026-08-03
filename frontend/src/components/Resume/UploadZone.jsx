import { Paper, Typography, Button, Stack } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export default function UploadZone({ onFileSelect }) {

    const handleChange = (e) => {

        const file = e.target.files[0];

        if (file) {

            onFileSelect(file);

        }

    };

    return (

        <Paper
            elevation={0}
            sx={{
                p: 6,
                borderRadius: 5,
                border: "2px dashed #4F7CFF",
                background: "rgba(79,124,255,.06)",
                textAlign: "center",
            }}
        >

            <Stack
                spacing={3}
                alignItems="center"
            >

                <UploadFileIcon
                    sx={{
                        fontSize: 70,
                        color: "#4F7CFF",
                    }}
                />

                <Typography variant="h5">

                    Drag & Drop Resume

                </Typography>

                <Typography color="gray">

                    PDF or DOCX

                </Typography>

                <Button
                    variant="contained"
                    component="label"
                >

                    Browse File

                    <input

                        hidden

                        type="file"

                        accept=".pdf,.doc,.docx"

                        onChange={handleChange}

                    />

                </Button>

            </Stack>

        </Paper>

    );

}