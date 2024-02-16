import { Box, Container, Divider, Typography } from "@mui/material";
import { ItemsList } from "components/atoms";
import { Hero } from "components/layouts";
import { theme } from "themes/theme";
import ethereum from "assets/img/ethereum.png";

function Home() {
    return (
        <Box>
            <Box>
                {/* Introduction */}
                <Hero
                    datas={{
                        image: "https://via.placeholder.com/400x300",
                        title: "Révolutionnez la certification des diplômes avec la //Blockchain !//",
                        subtitle: "//DiploEra !//",
                        texts: [
                            "Bienvenue sur DiploEra, la plateforme d'enregistrement des diplômes sur la blockchain.",
                            "Révolutionnez la manière dont les diplômes sont stockés et vérifiés avec notre solution sécurisée et transparente basée sur la technologie blockchain."
                        ],
                        buttons: [
                            {
                                text: "Commencer",
                                onClick: () =>
                                    alert("Clique sur En savoir plus")
                            },
                            {
                                text: "Contactez-nous",
                                onClick: () =>
                                    alert("Clique sur Contactez-nous")
                            }
                        ]
                    }}
                    options={{ imagePosition: "right", theme: "light" }}
                />
                <ItemsList
                    type="NumberCard"
                    options={{
                        theme: "light",
                        elevation: 12
                    }}
                    items={[
                        {
                            number: "15 000",
                            text: "Diplômes enregistrés"
                        },
                        {
                            number: "50 000",
                            text: "Diplômes vérifiés"
                        },
                        {
                            number: "124",
                            text: "Institutions partenaires"
                        },
                        {
                            number: "3 minutes",
                            text: "Pour vérifier un diplôme"
                        }
                    ]}
                />
            </Box>

            {/* Supported blockchains */}
            <Box
                sx={{
                    backgroundColor: theme.palette.dark.background,
                    paddingTop: 8
                }}
            >
                <Typography
                    variant="h4"
                    align="center"
                    sx={{
                        color: theme.palette.dark.text,
                        marginBottom: "2rem"
                    }}
                >
                    Blockchains supportées
                </Typography>
                <ItemsList
                    type="ImgCard"
                    options={{
                        theme: "dark",
                        elevation: 12,
                        breadcrumbs: { xs: 2, md: 3 }
                    }}
                    items={[
                        {
                            image: ethereum,
                            title: "Ethereum"
                        }
                    ]}
                />
            </Box>

            {/* Objectifs */}
            <Hero
                datas={{
                    image: "https://via.placeholder.com/400x300",
                    title: "L'enregistrement des diplômes //simplifié//",
                    subtitle: "//C'est quoi DiploEra ?//",
                    texts: [
                        "Notre projet vise à simplifier et sécuriser le processus d'enregistrement des diplômes grâce à la blockchain. En utilisant cette technologie innovante, nous offrons une solution fiable et immuable pour stocker vos diplômes de manière transparente et accessible."
                    ]
                }}
                options={{ imagePosition: "left" }}
            />
            <Container
                maxWidth="lg"
                sx={{
                    marginTop: -2,
                    paddingBottom: 8
                }}
            >
                <Box sx={{ display: "flex" }}>
                    <Box sx={{ marginRight: "32px" }}>
                        <Typography
                            variant="h3"
                            align="center"
                            sx={{
                                backgroundImage:
                                    theme.palette.primary.mainGradient,
                                backgroundClip: "text",
                                color: "transparent"
                            }}
                        >
                            Notre objectif
                        </Typography>
                        <Typography variant="body1" align="center">
                            Notre objectif est de créer un écosystème où les
                            individus peuvent enregistrer leurs diplômes de
                            manière sécurisée et où les vérificateurs peuvent
                            les valider en toute confiance.
                        </Typography>
                    </Box>
                    <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                        sx={{
                            background: theme.palette.primary.main,
                            opacity: 0.5
                        }}
                    />
                    <Box sx={{ marginLeft: "32px" }}>
                        <Typography
                            variant="h3"
                            align="center"
                            sx={{
                                backgroundImage:
                                    theme.palette.primary.mainGradient,
                                backgroundClip: "text",
                                color: "transparent"
                            }}
                        >
                            Notre mission
                        </Typography>
                        <Typography variant="body1" align="center">
                            Nous nous engageons à promouvoir la transparence et
                            la confiance dans les certifications éducatives en
                            fournissant une solution technologique robuste et
                            conviviale.
                        </Typography>
                    </Box>
                </Box>
            </Container>

            {/* Pourquoi choisir DiploEra ? */}
            <Box
                sx={{
                    backgroundColor: theme.palette.light.background,
                    py: 8
                }}
            >
                <Container maxWidth="lg">
                    <ItemsList
                        type="NumberCard"
                        options={{ theme: "light", elevation: 12 }}
                        items={[
                            {
                                number: "15 000",
                                text: "Diplômes enregistrés"
                            },
                            {
                                number: "50 000",
                                text: "Diplômes vérifiés"
                            },
                            {
                                number: "124",
                                text: "Institutions partenaires"
                            },
                            {
                                number: "3 minutes",
                                text: "Pour vérifier un diplôme"
                            }
                        ]}
                    />
                </Container>
            </Box>

            {/* Features */}

            {/* <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
                style={{ height: "80vh" }}
            >
                <Grid item xs={12}>
                    <Typography variant="h2" align="center" gutterBottom>
                        Bienvenue sur notre Plateforme Blockchain
                    </Typography>
                    <Typography variant="h5" align="center" paragraph>
                        Utilisez la blockchain pour le stockage et
                        l'authentification des diplômes.
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                href="#a-propos"
                            >
                                En savoir plus
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="outlined"
                                color="primary"
                                href="#connexion"
                            >
                                Se connecter
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> */}
        </Box>
    );
}

export default Home
