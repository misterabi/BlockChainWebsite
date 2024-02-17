import { useSDK } from "@metamask/sdk-react";
import {
    Lock,
    Public,
    Save,
    Share,
    TaskAlt,
    Timer,
    Visibility
} from "@mui/icons-material";
import { Box, Container, Divider, Typography } from "@mui/material";
import blockchain from "assets/img/blockchain.png";
import consensys from "assets/img/consensys.png";
import coursera from "assets/img/coursera.png";
import diploeraFonctionnement from "assets/img/diploera-fonctionnement.webp";
import diploera from "assets/img/diploera.webp";
import sciencespo from "assets/img/sciencespo.png";
import sterling from "assets/img/sterling.png";
import udemy from "assets/img/udemy.png";
import workday from "assets/img/workday.png";
import { Title } from "components/atoms";
import { Hero } from "components/layouts";
import { ItemsList, Timeline } from "components/molecules";
import { theme } from "themes/theme";

function Home() {
    const { sdk } = useSDK();

    const Sign = async () => {
        try {
            await sdk?.connect();
        } catch (err) {
            console.warn(`failed to connect..`, err);
        }
    };

    return (
        <Box>
            <Box>
                {/* Introduction */}
                <Hero
                    datas={{
                        image: diploera,
                        title: "Révolutionnez la certification des diplômes avec la //Blockchain !//",
                        subtitle: "//DiploEra !//",
                        texts: [
                            "Bienvenue sur DiploEra, la plateforme d'enregistrement des diplômes sur la blockchain.",
                            "Révolutionnez la manière dont les diplômes sont stockés et vérifiés avec notre solution sécurisée et transparente basée sur la technologie blockchain."
                        ],
                        buttons: [
                            {
                                text: "Commencer",
                                onClick: () => Sign()
                            },
                            {
                                text: "Contactez-nous",
                                onClick: () =>
                                    alert("Clique sur Contactez-nous")
                            }
                        ]
                    }}
                    options={{ imagePosition: "right", theme: "light" }}
                    style={{ py: 0 }}
                />
                <ItemsList
                    type="PaperCard"
                    options={{
                        theme: "light"
                    }}
                    items={[
                        {
                            title: "15 000",
                            description: "Diplômes enregistrés"
                        },
                        {
                            title: "50 000",
                            description: "Diplômes vérifiés"
                        },
                        {
                            title: "124",
                            description: "Institutions partenaires"
                        },
                        {
                            title: "3 minutes",
                            description: "Pour vérifier un diplôme"
                        }
                    ]}
                />
            </Box>

            {/* Partenerships */}
            <Box
                sx={{
                    backgroundColor: theme.palette.dark.background,
                    py: 6
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
                    Nos partenaires
                </Typography>
                <ItemsList
                    type="ImgCard"
                    options={{
                        theme: "dark",
                        elevation: 0,
                        breakpoints: { xs: 2, md: 2 },
                        border: false,
                        alignItems: "center"
                    }}
                    style={{ pb: 0 }}
                    items={[
                        {
                            image: consensys,
                            title: "Ethereum"
                        },
                        {
                            image: coursera,
                            title: "Coursera"
                        },
                        {
                            image: sterling,
                            title: "Sterling"
                        },
                        {
                            image: udemy,
                            title: "Udemy"
                        },
                        {
                            image: sciencespo,
                            title: "Sciences Po"
                        },
                        {
                            image: workday,
                            title: "Workday"
                        }
                    ]}
                />
            </Box>

            {/* Objectifs */}
            <Hero
                datas={{
                    title: "L'enregistrement des diplômes //simplifié//",
                    subtitle: "//C'est quoi DiploEra ?//",
                    texts: [
                        "Notre projet vise à simplifier et sécuriser le processus d'enregistrement des diplômes grâce à la blockchain. En utilisant cette technologie innovante, nous offrons une solution fiable et immuable pour stocker vos diplômes de manière transparente et accessible."
                    ]
                }}
                options={{
                    imagePosition: "left",
                    titleStyle: { textAlign: "center" }
                }}
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
                <Container maxWidth="lg" sx={{ pb: 4 }}>
                    <Title
                        datas={{
                            subtitle: "//Pourquoi choisir DiploEra ?//",
                            title: "Les //avantages clés//"
                        }}
                        options={{
                            style: { textAlign: "center" }
                        }}
                    />
                </Container>
                <ItemsList
                    type="PaperCard"
                    options={{
                        theme: "light",
                        breakpoints: { xs: 6, md: 4 }
                        // elevation: 12
                    }}
                    items={[
                        {
                            icon: Lock,
                            title: "Sécurité renforcée",
                            description:
                                "Grâce à la blockchain, vos diplômes sont cryptés et sécurisés contre toute altération ou falsification. Chaque enregistrement est vérifiable et immuable."
                        },
                        {
                            icon: Visibility,
                            title: "Transparence totale",
                            description:
                                "La technologie blockchain garantit une traçabilité complète de chaque diplôme enregistré, offrant ainsi une transparence inégalée dans le processus de certification.."
                        },
                        {
                            icon: Public,
                            title: "Accessibilité universelle",
                            description:
                                "Les diplômes enregistrés sur notre plateforme sont accessibles à tout moment et de n'importe où, sans intermédiaires. Cela facilite le partage des diplômes avec les employeurs, les établissements d'enseignement supérieur et d'autres parties prenantes."
                        },
                        {
                            icon: Timer,
                            title: "Validation instantanée",
                            description:
                                "Les employeurs, les universités et les tiers peuvent vérifier l'authenticité des diplômes en temps réel, réduisant ainsi les délais de vérification et assurant une embauche plus rapide et plus efficace."
                        }
                    ]}
                />
            </Box>

            {/* Processus d'enregistrement */}
            <Box
                sx={{
                    backgroundColor: "#fff",
                    paddingTop: 8
                }}
            >
                <Container maxWidth="lg">
                    <Title
                        datas={{
                            subtitle: "//Comment ça marche ?//",
                            title: "DiploEra en //3 étapes//"
                        }}
                        options={{
                            style: { textAlign: "center" }
                        }}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            gap: 4
                        }}
                    >
                        <img
                            src={diploeraFonctionnement}
                            alt="Fonctionnement de DiploEra"
                        />
                        <Timeline
                            datas={[
                                {
                                    steps: "1. Enregistrement des diplômes",
                                    description: [
                                        "Les écoles et universités utilisent DiploEra pour enregistrer les diplômes de leurs étudiants sur la blockchain. Ce processus garantit l'authenticité et l'intégrité des diplômes délivrés."
                                    ],
                                    icon: Save,
                                    color: "#2e58c3"
                                },
                                {
                                    steps: "2. Partage facilité",
                                    description: [
                                        "Une fois les diplômes enregistrés, les élèves reçoivent un lien unique vers leur diplôme sous diverses formes (URL, QR code, etc.). Ils peuvent partager ce lien avec des tiers tels que les employeurs ou d'autres institutions éducatives."
                                    ],
                                    icon: Share,
                                    color: "#3c70e2"
                                },
                                {
                                    steps: "3. Vérification instantanée par les recruteurs",
                                    description: [
                                        "Les recruteurs et les institutions recevront le lien vers le diplôme partagé par l'élève. En quelques clics, ils peuvent vérifier instantanément l'authenticité et l'origine du diplôme en accédant aux données enregistrées sur la blockchain via DiploEra."
                                    ],
                                    icon: TaskAlt,
                                    color: "#4783fa"
                                }
                            ]}
                            options={{
                                position: "right",
                                oppositeContent: false
                            }}
                        />
                    </Box>
                </Container>
            </Box>

            {/* Pourquoi la blockchain ? */}
            <Hero
                datas={{
                    image: blockchain,
                    title: "//La puissance// de la blockchain",
                    subtitle: "//Pourquoi la blockchain ?//",
                    texts: [
                        "La blockchain offre un écosystème sécurisé et transparent pour stocker et partager des données sensibles telles que les diplômes. Voici pourquoi elle est l'avenir de la certification et de la validation des compétences :",
                        "<ul><li><b>Immuable :</b> Les données enregistrées sur la blockchain ne peuvent pas être modifiées ni supprimées, garantissant ainsi l'intégrité des diplômes.</li></ul>",
                        "<ul><li><b>Décentralisée :</b> La blockchain élimine le besoin d'intermédiaires et permet un accès direct aux informations, réduisant les coûts et les délais.</li></ul>",
                        "<ul><li><b>Confiance renforcée :</b> En utilisant la technologie blockchain, nous renforçons la confiance dans les diplômes et les qualifications, facilitant ainsi l'accès à l'emploi et à l'éducation.</li></ul>"
                    ]
                }}
                options={{ imagePosition: "right", theme: "dark" }}
            />

            <Box
                sx={{
                    backgroundColor: theme.palette.light.background,
                    py: 8
                }}
            >
                <Container maxWidth="lg" sx={{ pb: 4 }}>
                    <Title
                        datas={{
                            subtitle: "//Témoignages//",
                            title: "Ce que //nos utilisateurs disent//"
                        }}
                        options={{
                            style: { textAlign: "center" }
                        }}
                    />
                </Container>
                <ItemsList
                    type="TestimonialCard"
                    options={{
                        theme: "light",
                        breakpoints: { xs: 6, md: 4 }
                        // elevation: 12
                    }}
                    items={[
                        {
                            author: "Sophie Martin, Diplômée en Informatique",
                            rating: 5,
                            review: "Grâce à cette plateforme, j'ai pu facilement partager mes diplômes avec mes futurs employeurs, ce qui a grandement facilité le processus de recrutement."
                        },
                        {
                            author: "Thomas Dupont, Responsable RH",
                            rating: 4,
                            review: "Je suis impressionné par la simplicité et la sécurité de cette plateforme. En tant que recruteur, je peux vérifier les diplômes de mes candidats en quelques secondes."
                        },
                        {
                            author: "John Smith, Doyen de la Faculté des Sciences",
                            rating: 5,
                            review: "DiploEra est un outil indispensable pour notre établissement d'enseignement supérieur, nous permettant de garantir l'authenticité des diplômes et de simplifier les processus administratifs."
                        },
                        {
                            author: "David Tremblay, Responsable CertifExpert",
                            rating: 5,
                            review: "Cette plateforme est indispensable pour enregistrer et authentifier nos certifications. La technologie blockchain renforce la confiance de nos clients dans nos processus."
                        }
                    ]}
                />
            </Box>
        </Box>
    );
}

export default Home;
