import {
    Paper,
    Typography,
    Box,
} from "@mui/material";



import { motion } from "framer-motion";

export default function StatCard({

    title,

    value,

    icon,

    color,

    growth,

}) {

    return (

        <motion.div

            whileHover={{
                y: -8,
                scale: 1.03,
            }}

            transition={{
                duration: .25,
            }}

        >

            <Paper

                elevation={0}

                sx={{

                    p: 3,

                    borderRadius: "26px",

                    background:
                        "linear-gradient(180deg,#151E2D,#101826)",

                    border:
                        "1px solid rgba(255,255,255,.06)",

                    boxShadow:
                        "0 15px 40px rgba(0,0,0,.35)",

                    height: 190,

                    position: "relative",

                    overflow: "hidden",

                }}

            >

                {/* Glow */}

                <Box

                    sx={{

                        position: "absolute",

                        width: 140,

                        height: 140,

                        borderRadius: "50%",

                        background: `${color}22`,

                        top: -50,

                        right: -40,

                        filter: "blur(35px)",

                    }}

                />

                <Box

                    sx={{

                        display: "flex",

                        justifyContent: "space-between",

                        alignItems: "center",

                    }}

                >

                    <Box

                        sx={{

                            width: 58,

                            height: 58,

                            borderRadius: 4,

                            display: "flex",

                            justifyContent: "center",

                            alignItems: "center",

                            background: `${color}22`,

                            color,

                        }}

                    >

                        {icon}

                    </Box>

                    <Typography

                        sx={{

                            color: "#22C55E",

                            fontWeight: 700,

                        }}

                    >

                        {growth}

                    </Typography>

                </Box>

                <Typography

                    sx={{

                        mt: 4,

                        color: "#94A3B8",

                    }}

                >

                    {title}

                </Typography>

                <Typography

                    variant="h3"

                    sx={{

                        mt: 1,

                        color: "white",

                        fontWeight: 800,

                    }}

                >

                    {value}

                </Typography>

            </Paper>

        </motion.div>

    );

}