import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from "@mui/material";
import { useState } from "react";
import { Link, Link as RouterLink, useLocation } from "react-router-dom";

import mainLogo from "assets/img/logo.png";
import { theme } from "themes/theme";

const pages = [
    { name: "Accueil", path: "/" },
    { name: "À Propos", path: "/about" },
    { name: "Livre Blanc", path: "/whitepaper" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Partneriats", path: "/partnership" }
];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const location = useLocation(); // get current Url

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: theme.palette.background.light,
                boxShadow: "none"
            }}
        >
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        sx={{
                            display: { xs: "none", md: "flex" },
                            mr: 1,
                            height: "30px"
                        }}
                    >
                        <img src={mainLogo} alt="Logo DiploEra" />
                    </Link>

                    {/* Hamburger menu */}
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" }
                        }}
                    >
                        <IconButton
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{ color: theme.palette.text.main }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" }
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    component={RouterLink}
                                    to={page.path}
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography
                                        textAlign="center"
                                        sx={{
                                            my: 2,
                                            color: theme.palette.text.main,
                                            fontWeight:
                                                location.pathname === page.path
                                                    ? "bold"
                                                    : "normal"
                                        }}
                                    >
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Links */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" }
                        }}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                justifyContent: "center",
                                gap: 4
                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    component={RouterLink}
                                    to={page.path}
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: theme.palette.text.main,
                                        display: "block",
                                        fontWeight:
                                            location.pathname === page.path
                                                ? "bold"
                                                : "normal"
                                    }}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                        <Button
                            variant="contained"
                            component={RouterLink}
                            to="/sign"
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2,
                                display: "block"
                            }}
                        >
                            Connexion
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
