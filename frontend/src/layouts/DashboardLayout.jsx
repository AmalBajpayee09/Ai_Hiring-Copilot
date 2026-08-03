import Box from "@mui/material/Box";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

import AppRoutes from "../routes/AppRoutes";

export default function DashboardLayout() {

    return (

        <Box
            sx={{
                display: "flex",
                minHeight: "100vh",
                background: "#070B14",
            }}
        >

            <Sidebar />

            <Box
                sx={{
                    flex: 1,
                    ml: "280px",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                }}
            >

                <Navbar />

                <Box
                    component="main"
                    sx={{
                        flex: 1,
                        pt: "64px",
                        overflow: "visible",
                    }}
                >
                    <AppRoutes />
                </Box>

            </Box>

        </Box>

    );

}