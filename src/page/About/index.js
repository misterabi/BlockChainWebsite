import { Box, Container, Typography } from "@mui/material";

import Diversity3Icon from "@mui/icons-material/Diversity3";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import VisibilityIcon from "@mui/icons-material/Visibility";

import IntersectionBlock from "../../components/IntersectionBlock";
import ElementHighlight from "../../components/elementHighlight";

import imgAuthenticity from "../../assets/authenticity.png";
import imgEducation from "../../assets/education.png";
import imgEnvironment from "../../assets/environment.png";
import imgEvolution from "../../assets/evolution.png";
import imgPartnership from "../../assets/partnership.png";
import imgAccesibility from "../../assets/worldAccessibility.png";

import Header from "components/layouts/Header";
import { ItemsList } from "components/molecules";
import avatarAbi from "../../assets/avatar-abi.png";
import avatarLeo from "../../assets/avatar-leo.png";
import avatarSarah from "../../assets/avatar-sarah.png";
import avatarShirley from "../../assets/avatar-shirley.png";
import TeamMember from "../../components/memberCard";

function About() {
    const headerData = {
        section: "À propos",
        title: "DiploEra : L'avenir de l'éducation, certifié par la blockchain.",
        subtitle: [
            "Excellence, accessibilité mondiale, et authenticité, portées par une équipe dévouée.",
            "Redéfinissons la confiance ensemble."
        ]
    };

    const valuesData = [
        {
            title: "Innovation",
            icon: EmojiObjectsIcon,
            description:
                "Nous croyons en la puissance de l'innovation pour transformer l'éducation et la certification. Nous nous engageons à rester à la pointe de la technologie, en intégrant les dernières avancées de la blockchain pour offrir des solutions de certification fiables et novatrices."
        },
        {
            title: "Transparence",
            icon: VisibilityIcon,
            description:
                "La transparence est au cœur de notre démarche. Nous nous efforçons de créer un environnement où chaque individu peut accéder facilement et en toute confiance aux informations relatives à son diplôme. Nous garantissons également la transparence dans nos opérations internes et dans la gestion des données."
        },
        {
            title: "Éducation",
            icon: SchoolIcon,
            description:
                "Nous valorisons l'éducation comme un moyen d'autonomiser les individus. Nous nous engageons à fournir des ressources éducatives pour sensibiliser les utilisateurs, les institutions éducatives et les entreprises sur les avantages de la certification blockchain, contribuant ainsi à une compréhension plus large de son impact."
        },
        {
            title: "Inclusion",
            icon: Diversity3Icon,
            description:
                "Nous aspirons à créer un écosystème inclusif où chaque personne, indépendamment de son origine, de son statut socio-économique ou de ses compétences, a la possibilité de bénéficier de la certification blockchain. Nous œuvrons pour éliminer les barrières à l'éducation et à la reconnaissance des compétences."
        },
        {
            title: "Intégrité",
            icon: VerifiedUserIcon,
            description:
                "L'intégrité est fondamentale dans tout ce que nous faisons. Nous nous engageons à maintenir les normes les plus élevées en matière de sécurité des données, d'éthique professionnelle et de qualité des services. La confiance de nos utilisateurs et partenaires est notre priorité absolue."
        },
        {
            title: "Collaboration",
            icon: PeopleAltIcon,
            description:
                "Nous croyons au pouvoir de la collaboration pour créer un impact durable. Nous nous engageons à travailler en étroite collaboration avec les institutions éducatives, les entreprises et les organismes gouvernementaux pour intégrer notre solution de certification blockchain dans leurs processus existants."
        }
    ];

    const missionsData = [
        {
            title: "Authenticité Inébranlable",
            image: imgAuthenticity,
            description:
                "Renforcer la confiance mondiale en éliminant la contrefaçon des diplômes grâce à la blockchain, assurant une sécurité inébranlable."
        },
        {
            title: "Accessibilité Mondiale",
            image: imgAccesibility,
            description:
                "Rendre l'éducation accessible à tous, transcendant les frontières géographiques et économiques pour créer des opportunités équitables."
        },
        {
            title: "Partenariats Institutionnels",
            image: imgPartnership,
            description:
                "Forger des partenariats institutionnels solides pour intégrer la certification blockchain, assurant une reconnaissance mondiale des diplômes émis."
        },
        {
            title: "Évolution Continue",
            image: imgEvolution,
            description:
                "Rester à la pointe de l'innovation en investissant dans la recherche, le développement de fonctionnalités et d'améliorations constantes."
        },
        {
            title: "Sensibilisation et Éducation",
            image: imgEducation,
            description:
                "Jouer un rôle actif dans la sensibilisation à la validation des diplômes par la blockchain, fournissant des ressources éducatives pertinentes"
        },
        {
            title: "Durabilité environnementale",
            image: imgEnvironment,
            description:
                "Intégrer des pratiques durables pour minimiser notre impact sur l'environnement, contribuant ainsi à une planète plus saine et durable."
        }
    ];

    const teamData = [
        {
            name: " Shirley Berchel",
            bio: "Shirley est le maître du multitasking. Elle peut coder en écoutant de la musique classique, résoudre des problèmes algorithmiques tout en préparant une tasse parfaite de thé au jasmin. Un génie du code avec une touche d'élégance artistique !",
            exp: [
                "Développeur Web chez XYZ Company",
                "Ingénieur logiciel chez ABC Inc."
            ],
            skills: ["React", "JavaScript", "Node.js"],
            avatar: avatarShirley,
            linkedIn: "https://www.linkedin.com/in/shirley-berchel/",
            instagram: "https://www.linkedin.com/in/johndoe",
            github: "https://github.com/ShirleyBJ"
        },
        {
            name: "Abidesh Thayanandan",
            bio: "Abi est le pro du design UI/UX qui a un amour inconditionnel pour les émojis. Il peut créer une interface utilisateur incroyable tout en racontant une blague à base de jeux de mots. Son superpouvoir ? Transformer n'importe quelle fonctionnalité en quelque chose d'extraordinairement convivial.",
            exp: [
                "Designer UI/UX chez EmojiDesign Studios",
                "Consultant en expérience utilisateur chez FunTech Innovations"
            ],
            skills: ["UI/UX Design", "Illustration", "Prototypage"],
            avatar: avatarAbi,
            linkedIn: "https://www.linkedin.com/in/nouveau-membre/",
            instagram: "https://www.instagram.com/nouveau-membre/",
            github: "https://github.com/misterabi"
        },
        {
            name: "Sarah Hitier",
            bio: "Sarah vit dans un monde de pixels. Elle parle couramment en langage machine et croit que les licornes sont les meilleures testeurs de logiciels. Fun fact : Elle a résolu le problème du lapin en retard en créant une application d'horloge dimensionnelle.",
            exp: [
                "Développeur logiciel chez Wonderland Tech",
                "Chercheur en intelligence artificielle chez Quantum Computing Co."
            ],
            skills: ["Python", "Machine Learning", "Algorithmes quantiques"],
            avatar: avatarSarah,
            linkedIn: "https://www.linkedin.com/in/nouveau-membre/",
            instagram: "https://www.instagram.com/nouveau-membre/",
            github: "https://github.com/Sarah-HITIER"
        },
        {
            name: "Leonardo Kabongo Maundo",
            bio: "Leo est notre expert en caféine. Il peut boire trois tasses d'espresso avant même que votre application ne compile. Sa superpuissance ? Transformer du café en code. Vous le trouverez toujours avec une tasse de café à la main et un sourire sur le visage.",
            exp: [
                "Barista chez Java Junction",
                "Développeur Front-End chez CoffeeCode Solutions"
            ],
            skills: ["HTML", "CSS", "React"],
            avatar: avatarLeo,
            linkedIn: "https://www.linkedin.com/in/nouveau-membre/",
            instagram: "https://www.instagram.com/nouveau-membre/",
            github: "https://github.com/leonardo75018"
        }
    ];

    const styles = {
        container: {
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap" // Permet aux éléments de passer à la ligne
        },
        sectionMission: {
            width: "100%",
            height: "30%",
            backgroundColor: "light.background",
            pb: "15px"
        },
        subtitleSection: {
            margin: "10px 10px 30px 10px",
            fontWeight: 500,
            fontSize: "18px",
            textAlign: "center"
        }
    };

    return (
        <Container maxWidth="large" disableGutters={true}>
            {/* Header Block */}
            <Header
                section={headerData.section}
                title={headerData.title}
                subtitle={headerData.subtitle}
            />
            {/* Vision Block */}
            <Box
                sx={{
                    py: "70px"
                }}
            >
                <IntersectionBlock title="Notre Vision" subtitle="Vision" />
                <Typography variant="subtitle2" style={styles.subtitleSection}>
                    Notre vision à long terme chez DiploEra est de révolutionner
                    le monde de l'éducation en apportant une authenticité
                    inégalée aux diplômes grâce à la technologie blockchain.{" "}
                    <br />
                    Nous aspirons à créer un écosystème où chaque individu peut
                    bénéficier d'une validation immuable de ses réalisations
                    académiques, professionnelles et personnelles. <br />
                    Notre objectif ultime est de redéfinir la confiance dans les
                    diplômes en les ancrant de manière sécurisée et transparente
                    dans la blockchain.
                </Typography>
            </Box>
            {/* Values Block */}
            <Box
                sx={{
                    paddingTop: 5,
                    backgroundColor: "#0d1123"
                }}
            >
                <IntersectionBlock title="Nos valeurs" subtitle="Values" />
                <ItemsList
                    type="PaperCard"
                    options={{
                        theme: "dark",
                        // elevation: 12,
                        breakpoints: { xs: 4, md: 4 }
                    }}
                    items={valuesData}
                />
            </Box>
            {/* Mission Block */}
            <IntersectionBlock
                title="Nos missions"
                subtitle="Missions"
                bgColor="light.background"
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "light.background"
                }}
            >
                <Typography
                    width="50%"
                    variant="subtitle2"
                    style={styles.subtitleSection}
                >
                    Chez DiploEra, nous nous engageons à créer un écosystème où
                    chaque individu peut bénéficier d'une validation immuable de
                    ses réalisations académiques, professionnelles et
                    personnelles. Nous nous efforçons de fournir une solution de
                    certification blockchain qui permettra de réduire les
                    disparités éducatives et de créer un impact durable dans le
                    monde entier.
                </Typography>
                <Box style={styles.sectionMission}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            flexWrap: "wrap",
                            backgroundColor: "light.background",
                            pb: 8
                        }}
                    >
                        {missionsData.map((value, index) => {
                            return (
                                <ElementHighlight
                                    key={index}
                                    img={value.image}
                                    title={value.title}
                                    description={value.description}
                                />
                            );
                        })}
                    </Box>
                </Box>
            </Box>
            {/* Team Block */}
            <IntersectionBlock title="Notre équipe" subtitle="Team" />
            <Box
                sx={{
                    width: "100%",
                    textAlign: "center",
                    pb: 10
                }}
            >
                <Typography variant="body1" style={styles.subtitleSection}>
                    Rencontrez notre équipe passionnée et dévouée qui donne vie
                    à notre vision.
                    <br />
                    Chacun de nos membres apporte une touche unique, des
                    compétences exceptionnelles et une énergie créative à notre
                    projet. <br />
                    Découvrez qui se cache derrière les lignes de code et les
                    conceptions innovantes, et apprenez-en plus sur les
                    personnes qui font de notre équipe un moteur de réussite.
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                        marginTop: "40px",
                        pt: 8
                    }}
                >
                    {teamData.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </Box>
            </Box>
        </Container>
    );
}

export default About;
