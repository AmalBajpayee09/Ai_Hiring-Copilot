import {
    Box,
    LinearProgress,
    Typography,
} from "@mui/material";

export default function ReadinessGauge({ value }) {

    return (

        <Box>

            <Typography
                fontWeight={700}
                mb={1}
            >
                Overall Readiness
            </Typography>

            <LinearProgress
                variant="determinate"
                value={value}
                sx={{
                    height: 12,
                    borderRadius: 5,
                }}
            />

            <Typography
                mt={1}
                color="primary"
                fontWeight={700}
            >
                {value}%
            </Typography>

        </Box>

    );

}