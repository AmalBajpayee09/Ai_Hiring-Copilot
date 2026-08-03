import {
    AppBar,
    Toolbar,
    Typography,
    Avatar,
    Box,
    IconButton,
    Badge,
} from "@mui/material";

import {
    Notifications,
    Search,
} from "@mui/icons-material";

export default function Navbar() {

    return (

        <AppBar
            position="fixed"
            elevation={0}
            sx={{

                left: "280px",

                width: "calc(100% - 280px)",

                background: "rgba(15,23,42,.45)",

                backdropFilter: "blur(25px)",

                borderBottom:
                    "1px solid rgba(255,255,255,.05)",

                zIndex: (theme) =>
                    theme.zIndex.drawer + 1,

            }}
        >

            <Toolbar>

                <Typography
                    variant="h5"
                    fontWeight={700}
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    AI Hiring Copilot
                </Typography>

                <IconButton color="inherit">
                    <Search />
                </IconButton>

                <IconButton color="inherit">
                    <Badge
                        badgeContent={5}
                        color="primary"
                    >
                        <Notifications />
                    </Badge>
                </IconButton>

                <Box ml={2}>
                    <Avatar
                        sx={{
                            bgcolor: "#4F7CFF",
                        }}
                    >
                        A
                    </Avatar>
                </Box>

            </Toolbar>

        </AppBar>

    );

}