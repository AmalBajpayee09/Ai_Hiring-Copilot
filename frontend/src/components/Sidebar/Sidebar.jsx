import {
    Dashboard,
    People,
    Work,
    Description,
    Psychology,
    Quiz,
    TrendingUp,
    SmartToy,
    Chat,
    Settings,
    Circle,
} from "@mui/icons-material";

import {
    Box,
    Typography,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Avatar,
} from "@mui/material";

import { Link, useLocation } from "react-router-dom";

const menu = [

    {
        text: "Dashboard",
        icon: <Dashboard />,
        path: "/",
    },

    {
        text: "Candidates",
        icon: <People />,
        path: "/candidates",
    },

    {
        text: "Jobs",
        icon: <Work />,
        path: "/jobs",
    },

    {
        text: "Resume AI",
        icon: <Description />,
        path: "/resume",
    },

    {
        text: "Evaluation",
        icon: <Psychology />,
        path: "/evaluation",
    },

    {
        text: "Interview",
        icon: <Quiz />,
        path: "/interview",
    },

    {
        text: "Skill Gap",
        icon: <TrendingUp />,
        path: "/skill-gap",
    },

    {
        text: "AI Chat",
        icon: <Chat />,
        path: "/chat",
    },

    {
        text: "AI Copilot",
        icon: <SmartToy />,
        path: "/copilot",
        premium: true,
    },

    {
        text: "Settings",
        icon: <Settings />,
        path: "/settings",
    },

];

export default function Sidebar() {

    const location = useLocation();

    return (

        <Box

            sx={{

                width: 280,

                height: "100vh",

                position: "fixed",

                left: 0,

                top: 0,

                display: "flex",

                flexDirection: "column",

                background:
                    "linear-gradient(180deg,#0F172A 0%,#0B1220 60%,#090F1B 100%)",

                borderRight:
                    "1px solid rgba(255,255,255,.06)",

                backdropFilter:
                    "blur(30px)",

                overflowY: "auto",

                overflowX: "hidden",

            }}

        >

            {/* Logo */}

            <Box

                sx={{

                    p: 3,

                    borderBottom:
                        "1px solid rgba(255,255,255,.05)",

                }}

            >

                <Typography

                    variant="h5"

                    fontWeight={800}

                    sx={{

                        background:
                            "linear-gradient(90deg,#60A5FA,#7C5CFF,#38BDF8)",

                        WebkitBackgroundClip: "text",

                        WebkitTextFillColor: "transparent",

                    }}

                >

                    🤖 AI Hiring

                </Typography>

                <Typography

                    sx={{

                        color: "#94A3B8",

                        mt: 1,

                        fontSize: 12,

                    }}

                >

                    Agentic Recruitment Platform

                </Typography>

            </Box>

            {/* Menu */}

            <List

                sx={{

                    px: 2,

                    py: 2,

                    flex: 1,

                }}

            >

                {

                    menu.map((item) => (

                        <ListItemButton

                            key={item.text}

                            component={Link}

                            to={item.path}

                            selected={
                                location.pathname === item.path
                            }

                            sx={{

                                mb: 1,

                                borderRadius: "16px",

                                color: "white",

                                transition: ".25s",

                                position: "relative",

                                overflow: "hidden",

                                ...(item.premium && {

                                    background:
                                        "linear-gradient(90deg,#1E3A8A,#312E81)",

                                    border:
                                        "1px solid rgba(79,124,255,.25)",

                                }),

                                "&.Mui-selected": {

                                    background:

                                        item.premium

                                            ?

                                            "linear-gradient(90deg,#4F7CFF,#6C63FF)"

                                            :

                                            "linear-gradient(90deg,#4F7CFF,#5B5EFF)",

                                    boxShadow:
                                        "0 0 25px rgba(79,124,255,.45)",

                                },

                                "&:hover": {

                                    background:

                                        item.premium

                                            ?

                                            "linear-gradient(90deg,#355CFF,#5E4BFF)"

                                            :

                                            "rgba(255,255,255,.06)",

                                    transform:
                                        "translateX(6px)",

                                },

                            }}

                        >

                            <ListItemIcon

                                sx={{

                                    color: "white",

                                    minWidth: 42,

                                }}

                            >

                                {item.icon}

                            </ListItemIcon>

                            <ListItemText

                                primary={

                                    <Box>

                                        <Typography

                                            sx={{

                                                fontSize: 15,

                                                fontWeight: 600,

                                                color: "white",

                                            }}

                                        >

                                            {item.text}

                                        </Typography>

                                        {

                                            item.premium && (

                                                <Typography

                                                    sx={{

                                                        fontSize: 10,

                                                        color: "#60A5FA",

                                                        fontWeight: 700,

                                                        letterSpacing: 1,

                                                    }}

                                                >

                                                    MULTI AGENT AI

                                                </Typography>

                                            )

                                        }

                                    </Box>

                                }

                            />

                        </ListItemButton>

                    ))

                }

            </List>

            {/* AI Status */}

            <Box

                sx={{

                    px: 3,

                    py: 2,

                    borderTop:
                        "1px solid rgba(255,255,255,.05)",

                }}

            >

                <Typography

                    fontWeight={700}

                    mb={2}

                >

                    AI Status

                </Typography>

                {

                    [

                        "Redis Connected",

                        "LangGraph Ready",

                        "FastAPI Online",

                        "RAG Active",

                    ].map((status) => (

                        <Box

                            key={status}

                            sx={{

                                display: "flex",

                                alignItems: "center",

                                mb: 1,

                            }}

                        >

                            <Circle

                                sx={{

                                    fontSize: 10,

                                    color: "#22C55E",

                                    mr: 1,

                                }}

                            />

                            <Typography

                                sx={{

                                    color: "#CBD5E1",

                                    fontSize: 13,

                                }}

                            >

                                {status}

                            </Typography>

                        </Box>

                    ))

                }

            </Box>

            {/* User */}

            <Box

                sx={{

                    display: "flex",

                    alignItems: "center",

                    gap: 2,

                    p: 2,

                    borderTop:
                        "1px solid rgba(255,255,255,.05)",

                }}

            >

                <Avatar

                    sx={{

                        bgcolor: "#4F7CFF",

                        fontWeight: 700,

                    }}

                >

                    A

                </Avatar>

                <Box>

                    <Typography

                        fontWeight={700}

                    >

                        Amal Bajpayee

                    </Typography>

                    <Typography

                        sx={{

                            color: "#94A3B8",

                            fontSize: 12,

                        }}

                    >

                        AI Engineer

                    </Typography>

                </Box>

            </Box>

        </Box>

    );

}