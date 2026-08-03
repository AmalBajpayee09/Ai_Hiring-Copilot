import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

import {
    Box,
    Typography,
} from "@mui/material";

const data = [

    { month: "Jan", hired: 12 },

    { month: "Feb", hired: 19 },

    { month: "Mar", hired: 17 },

    { month: "Apr", hired: 28 },

    { month: "May", hired: 34 },

    { month: "Jun", hired: 42 },

    { month: "Jul", hired: 47 },

    { month: "Aug", hired: 58 },

];

export default function HiringChart() {

    return (

        <Box

            sx={{

                p: 4,

                height: 430,

                borderRadius: "28px",

                background:
                    "linear-gradient(180deg,#141C2D,#101826)",

                border:
                    "1px solid rgba(255,255,255,.06)",

                boxShadow:
                    "0 15px 45px rgba(0,0,0,.35)",

            }}

        >

            <Typography

                variant="h5"

                fontWeight={700}

            >

                Hiring Analytics

            </Typography>

            <Typography

                sx={{

                    color: "#94A3B8",

                    mb: 4,

                }}

            >

                Monthly Hiring Trend

            </Typography>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <AreaChart
                    data={data}
                >

                    <defs>

                        <linearGradient
                            id="fillBlue"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >

                            <stop
                                offset="5%"
                                stopColor="#4F7CFF"
                                stopOpacity={0.8}
                            />

                            <stop
                                offset="95%"
                                stopColor="#4F7CFF"
                                stopOpacity={0}
                            />

                        </linearGradient>

                    </defs>

                    <CartesianGrid
                        stroke="#1E293B"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="month"
                        stroke="#94A3B8"
                    />

                    <YAxis
                        stroke="#94A3B8"
                    />

                    <Tooltip
                        contentStyle={{
                            background: "#111827",
                            border: "none",
                            borderRadius: "14px",
                            color: "white",
                        }}
                    />

                    <Area

                        type="monotone"

                        dataKey="hired"

                        stroke="#4F7CFF"

                        strokeWidth={4}

                        fill="url(#fillBlue)"

                    />

                </AreaChart>

            </ResponsiveContainer>

        </Box>

    );

}