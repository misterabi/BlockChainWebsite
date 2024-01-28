import { styled } from "@mui/material";
import { Footer, Navbar } from "components/layouts";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Main = styled("main")(({ theme }) => ({
    backgroundColor: "#fff",
    // minHeight: "100vh",
    padding: "68px 0 0",
    display: "flex",
    flexDirection: "column",
    color: theme.palette.light.text,
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
                <Outlet />
            </Main>
            <Footer />
        </div>
    );
}

export default App;
