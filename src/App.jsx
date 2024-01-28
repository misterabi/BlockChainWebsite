import { Navbar } from "./components";
import { styled, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Main = styled("main")(({ theme }) => ({
    backgroundColor: theme.palette.background.main,
    minHeight: "100vh",
    padding: "80px 0",
    display: "flex",
    flexDirection: "column",
    color: theme.palette.text.main,
    fontSize: theme.palette.fontSize
}));

function App() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <div className="App">
            <Navbar handleClickOpen={handleClickOpen} />
            <Main maxWidth="xl">
                <Container maxWidth="large" disableGutters={true}>
                    <Outlet />
                </Container>
            </Main>
        </div>
    );
}

export default App;
