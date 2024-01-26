import { Container, styled } from "@mui/material";
import { Footer, Navbar } from "components/layouts";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Main = styled("main")(({ theme }) => ({
    backgroundColor: theme.palette.background.main,
    // minHeight: "100vh",
    padding: "70px 0 0",
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
            <Main>
                <Container>
                    <Outlet />
                </Container>
            </Main>
            <Footer />
        </div>
    );
}

export default App;
