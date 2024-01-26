import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#3f76ea"
        },
        secondary: {
            main: "#ff7001"
        },
        background: {
            main: "#fff",
            light: "#f6f5f0",
            dark: "#0d1123"
        },
        text: {
            main: "#0d0621",
            light: "#fff"
        }
    },
    typography: {
        fontSize: 14,
        fontFamily: [
            "Nexa", // Définir Nexa pour les titres
            "Avenir", // Définir Avenir pour le texte
            "Roboto", // Par défaut, utilisez Roboto comme police de secours
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(","),
        h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.01562em"
        },
        h2: {
            fontSize: "4rem",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.00833em"
        },
        button: {
            textTransform: "none",
            fontWeight: 500
        }
    }
});
