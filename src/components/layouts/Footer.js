import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
    Box,
    Container,
    Grid,
    IconButton,
    Link,
    Button,
    Typography
} from "@mui/material";
import { theme } from "themes/theme";
import mainLogo from "assets/img/logo.png";

const links = [
    {
        title: "FAQ",
        href: "#"
    },
    {
        title: "À Propos",
        href: "#"
    },
    {
        title: "Contact",
        href: "#"
    }
];

const socials = [
    {
        title: "Facebook",
        icon: FacebookIcon,
        href: "#"
    },
    {
        title: "Twitter",
        icon: TwitterIcon,
        href: "#"
    },
    {
        title: "LinkedIn",
        icon: LinkedInIcon,
        href: "#"
    }
];

function Footer() {
    return (
        <Box sx={{ color: "#8791a5" }}>
            <Box
                component="footer"
                sx={{
                    backgroundColor: theme.palette.dark.background,
                    py: 4
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={8}>
                        {/* Left column */}
                        <Grid item xs={12} md={5}>
                            <Grid
                                item
                                sx={{
                                    padding: "0 0 16px",
                                    margin: "0 0 16px",
                                    "border-bottom": "0.5px solid #6B6F78"
                                }}
                            >
                                <img src={mainLogo} alt="Logo DiploEra" />
                                <Typography
                                    variant="body1"
                                    sx={{ color: "#6B6F78 " }}
                                >
                                    Inscrivez-vous à notre newsletter pour
                                    recevoir les dernières mises à jour et
                                    nouvelles.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                {socials.map((social) => (
                                    <IconButton
                                        key={social.title}
                                        href={social.href}
                                        color="inherit"
                                        sx={{
                                            "&:hover": {
                                                color: theme.palette.primary
                                                    .main
                                            }
                                        }}
                                    >
                                        <social.icon />
                                    </IconButton>
                                ))}
                            </Grid>
                        </Grid>

                        {/* Center column */}
                        <Grid item xs={12} md={2}>
                            <Typography
                                variant="h6"
                                component="h2"
                                gutterBottom
                                sx={{ color: "#fff" }}
                            >
                                Liens Utiles
                            </Typography>
                            {links.map((link) => (
                                <Typography variant="body1" key={link.title}>
                                    <Link
                                        href={link.href}
                                        color="inherit"
                                        underline="hover"
                                    >
                                        {link.title}
                                    </Link>
                                </Typography>
                            ))}
                        </Grid>

                        {/* Right column */}
                        <Grid item xs={12} md={5}>
                            <Typography
                                variant="h6"
                                component="h2"
                                gutterBottom
                                sx={{ color: "#fff" }}
                            >
                                Rejoignez l'aventure
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ color: "#6B6F78 " }}
                            >
                                Inscrivez-vous dès maintenant pour accéder à du
                                contenu exclusif 100% gratuitement.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ mt: 2 }}
                            >
                                S'abonner à la newsletter
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box
                sx={{
                    "background-color": "#0a0d1c"
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            padding: "24px 0",
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >
                        <Typography variant="body2" align="center">
                            © {new Date().getFullYear()} DiploEra. Tous droits
                            réservés.
                        </Typography>
                        <Typography variant="body2" align="center">
                            Digital Campus
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default Footer;
