import {
    Paper,
    Typography,
    Stack,
} from "@mui/material";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export default function ResumePreview({

    file,

}) {

    return (

        <Paper

            elevation={0}

            sx={{

                mt: 4,

                p: 3,

                borderRadius: 4,

                background:
                    "linear-gradient(180deg,#151E2D,#101826)",

                border:
                    "1px solid rgba(255,255,255,.06)",

            }}

        >

            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
            >

                <PictureAsPdfIcon
                    sx={{
                        fontSize: 50,
                        color: "#EF4444",
                    }}
                />

                <div>

                    <Typography
                        fontWeight={700}
                    >
                        {file.name}
                    </Typography>

                    <Typography
                        color="gray"
                    >
                        {(file.size / 1024).toFixed(1)} KB
                    </Typography>

                </div>

            </Stack>

        </Paper>

    );

}