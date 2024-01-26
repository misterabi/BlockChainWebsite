import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { About, Home, Partnership, Roadmap, Sign, WhitePaper } from "./page";

import { ThemeProvider } from "@mui/material";
import { theme } from "./themes/theme.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/partnership", element: <Partnership /> },
            { path: "/roadmap", element: <Roadmap /> },
            { path: "/whitepaper", element: <WhitePaper /> },
            { path: "/sign", element: <Sign /> }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
    </ThemeProvider>
);
