import {
    Paper,
    Typography,
    Grid,
    Box,
    Fade,
} from "@mui/material";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

export default function ProsConsCard({ decision }) {

    return (

        <Grid

            container

            spacing={3}

            sx={{

                mt: 2,

            }}

        >

            {/* Strengths */}

            <Grid

                item

                xs={12}

                md={6}

            >

                <Fade

                    in

                    timeout={900}

                >

                    <Paper

                        elevation={0}

                        sx={{

                            p: 4,

                            height: "100%",

                            borderRadius: 5,

                            background:

                                "rgba(17,24,39,.75)",

                            backdropFilter:

                                "blur(18px)",

                            border:

                                "1px solid rgba(34,197,94,.15)",

                            transition: ".3s",

                            "&:hover": {

                                transform:

                                    "translateY(-5px)",

                                boxShadow:

                                    "0 0 25px rgba(34,197,94,.20)",

                            },

                        }}

                    >

                        <Typography

                            variant="h5"

                            fontWeight={700}

                            mb={3}

                        >

                            ✅ Candidate Strengths

                        </Typography>

                        {

                            decision.pros.map(

                                (

                                    item,

                                    index

                                ) => (

                                    <Box

                                        key={index}

                                        sx={{

                                            display: "flex",

                                            gap: 2,

                                            mb: 2.5,

                                            p: 2,

                                            borderRadius: 3,

                                            bgcolor:

                                                "rgba(34,197,94,.08)",

                                        }}

                                    >

                                        <CheckCircleRoundedIcon

                                            sx={{

                                                color: "#22C55E",

                                                mt: "2px",

                                            }}

                                        />

                                        <Typography

                                            lineHeight={1.7}

                                        >

                                            {item}

                                        </Typography>

                                    </Box>

                                )

                            )

                        }

                    </Paper>

                </Fade>

            </Grid>

            {/* Weaknesses */}

            <Grid

                item

                xs={12}

                md={6}

            >

                <Fade

                    in

                    timeout={1200}

                >

                    <Paper

                        elevation={0}

                        sx={{

                            p: 4,

                            height: "100%",

                            borderRadius: 5,

                            background:

                                "rgba(17,24,39,.75)",

                            backdropFilter:

                                "blur(18px)",

                            border:

                                "1px solid rgba(245,158,11,.15)",

                            transition: ".3s",

                            "&:hover": {

                                transform:

                                    "translateY(-5px)",

                                boxShadow:

                                    "0 0 25px rgba(245,158,11,.20)",

                            },

                        }}

                    >

                        <Typography

                            variant="h5"

                            fontWeight={700}

                            mb={3}

                        >

                            ⚠ Areas to Improve

                        </Typography>

                        {

                            decision.cons.map(

                                (

                                    item,

                                    index

                                ) => (

                                    <Box

                                        key={index}

                                        sx={{

                                            display: "flex",

                                            gap: 2,

                                            mb: 2.5,

                                            p: 2,

                                            borderRadius: 3,

                                            bgcolor:

                                                "rgba(245,158,11,.08)",

                                        }}

                                    >

                                        <WarningAmberRoundedIcon

                                            sx={{

                                                color: "#F59E0B",

                                                mt: "2px",

                                            }}

                                        />

                                        <Typography

                                            lineHeight={1.7}

                                        >

                                            {item}

                                        </Typography>

                                    </Box>

                                )

                            )

                        }

                    </Paper>

                </Fade>

            </Grid>

        </Grid>

    );

}