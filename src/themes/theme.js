import { createTheme } from "@mui/material/styles";

const mainGradient = "linear-gradient(to right, #2e58c3, #4783fa)";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#3f76ea",
            mainGradient: mainGradient
        },
        secondary: {
            main: "#ff7001"
        },
        light: {
            background: "#f6f5f0",
            text: "#120a01"
        },
        dark: {
            background: "#0d1123",
            text: "#fff"
        }
    },
    typography: {
        fontSize: 14,
        fontFamily: [
            "Poppins",
            "Avenir",
            "Roboto",
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
            fontSize: "3rem",
            fontWeight: 700,
            lineHeight: 1.2
        },
        h2: {
            fontSize: "2.6rem",
            fontWeight: 700,
            lineHeight: 1.2
        },
        h3: {
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: 1.2,
            textTransform: "uppercase",
            letterSpacing: 1,
            marginBottom: "1rem"
        },

        p: {
            fontSize: "1rem",
            lineHeight: 1.5
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontWeight: 400,
                    letterSpacing: 1
                },
                containedPrimary: {
                    backgroundColor: "transparent", // Set background to transparent
                    backgroundImage: mainGradient,
                    "&:hover": {
                        // Hover effect
                        backgroundColor: "transparent", // Set background to transparent
                        backgroundImage:
                            "linear-gradient(to right, #294faf, #3f75e1)"
                    }
                }
            }
        }
    }
});
