import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Votre Titre
                </Typography>
                <Button color="inherit">Accueil</Button>
                <Button color="inherit">À Propos</Button>
                <Button color="inherit">Livre Blanc</Button>
                <Button color="inherit">Roadmap</Button>
                <Button color="inherit">Partenariats</Button>
                <Button color="inherit">Connexion</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
