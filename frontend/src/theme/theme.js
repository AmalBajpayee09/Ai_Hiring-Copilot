import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    palette: {

        mode: "dark",

        primary: {
            main: "#4F7CFF",
        },

        secondary: {
            main: "#7C5CFF",
        },

        background: {

            default: "#070B14",

            paper: "rgba(255,255,255,0.04)",

        },

        text: {

            primary: "#ffffff",

            secondary: "#9CA3AF",

        },

    },

    typography: {

        fontFamily: "Inter",

        h3: {
            fontWeight: 700,
        },

        h4: {
            fontWeight: 700,
        },

        h5: {
            fontWeight: 600,
        },

        button: {
            textTransform: "none",
            fontWeight: 600,
        },

    },

    shape: {
        borderRadius: 20,
    },

});

export default theme;