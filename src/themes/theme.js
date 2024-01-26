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
            main: "#0d0621"
        }
    },
    typography: {
        fontSize: 14
    }
});
