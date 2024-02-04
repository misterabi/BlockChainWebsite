import React from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Groups2Icon from "@mui/icons-material/Groups2";
import BuildIcon from "@mui/icons-material/Build";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import TimelineIcon from "@mui/icons-material/Timeline";
import LaunchIcon from "@mui/icons-material/Launch";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import CodeIcon from "@mui/icons-material/Code";
import PsychologyIcon from "@mui/icons-material/Psychology";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

import { theme } from "themes/theme";
import headerImg from "../../assets/roadmap_header.jpeg";
import Header from "components/layouts/Header";
import IntersectionBlock from "components/IntersectionBlock";

function Roadmap() {
  const headerData = {
    section: "Roadmap",
    title: "Notre Route vers l'Innovation Éducative",
    subtitle: [
      "Redéfinir la confiance dans l'éducation en éliminant la contrefaçon des diplômes grâce à la puissance de la technologie blockchain.",
    ],
    img: headerImg,
  };

  const options = {
    imagePosition: "left",
    theme: "dark",
  };

  const roadmapIntroduction = [
    "Bienvenue sur la roadmap de DiploEra,",
    "l'avenir de la certification éducative décentralisée.",
    "Notre parcours est guidé par une vision ambitieuse : redéfinir la confiance dans l'éducation en éliminant la contrefaçon des diplômes grâce à la puissance de la technologie blockchain.",
    "Découvrez notre plan stratégique qui établit clairement les étapes cruciales de développement, du concept initial à l'intégration complète.",
    "Chaque trimestre marque une avancée significative, allant de l'exploration technologique à l'adoption mondiale de DiploEra.",
    "Rejoignez-nous alors que nous façonnons l'avenir de la certification éducative, repoussant les limites de l'innovation, de la sécurité, et de l'accessibilité.",
    "Suivez notre roadmap pour être témoin des progrès de DiploEra dans la création d'un monde où chaque diplôme est authentifié, accessible et mondialement reconnu.",
  ];

  const roadmapSteps = [
    {
      timeline: "Q1 : Janv - Mars",
      title: "Définition de la Vision et des Objectifs ",
      description:
        "Clarification de notre direction et de nos objectifs spécifiques.",
      icon: PsychologyIcon,
    },
    {
      timeline: "Q1-Q3 : Janv - Sept",
      title: " Création d'un Use Case et Développement du Proof of Concept",
      description:
        "Identification des cas d'utilisation spécifiques et développement d'un prototype pour valider la faisabilité technique.",
      icon: AssignmentIcon,
    },
    {
      timeline: "Q3 - Q4 : Juill - Déc",
      title: "Intégration de l'Équipe et Construction du Design",
      description:
        "Recrutement des membres clés de l'équipe et développement de l'architecture complète de DiploEra.",
      icon: DesignServicesIcon,
    },
    {
      timeline: "Q4 : Année suivante (Oct - Déc)",
      title: "Évolution du Proof of Concept",
      description:
        "Élargissement du Proof of Concept pour inclure des tests plus étendus.",
      icon: BuildIcon,
    },
    {
      timeline: " Année suivante (Janv - Déc)",
      title: "Déploiement",
      description:
        "Déploiement officiel de DiploEra permettant aux utilisateurs d'émettre, partager et vérifier des diplômes.",
      icon: LaunchIcon,
    },
  ];

  const roadmapData = [
    {
      timeline: "Q1",
      steps: "Définition de la Vision et des Objectifs du Projet",
      description: [
        "Identifier les besoins éducatifs et les problèmes liés à la contrefaçon de diplômes.",
        "Définir clairement la vision à long terme et les objectifs spécifiques de DiploEra.",
      ],
      icon: VisibilityIcon,
      color: "#1C3573",
    },
    {
      timeline: "Q1-Q2",
      title: "Création d'un Use Case",
      description: [
        "Identifier les cas d'utilisation spécifiques de DiploEra dans la certification éducative.",
        "Développer des scénarios concrets d'application du service.",
      ],
      icon: AssignmentIcon,
      color: "#233D80",
    },
    {
      timeline: "Q1-Q2",
      steps: "Développement du Modèle Tokenomics",
      description: [
        "Concevoir un modèle économique basé sur le token de DiploEra, détaillant son utilisation, sa distribution, et son impact sur l'écosystème.",
      ],
      icon: AccountBalanceIcon,
      color: "#2F4E9D",
    },
    {
      timeline: "Q2",
      title: "Définition de l'Équipe",
      description: [
        "Identifier les compétences nécessaires pour chaque aspect du projet et constituer une équipe diversifiée et compétente.",
        "Recruter et intégrer les membres clés de l'équipe technique, marketing, et opérationnelle.",
        "Former le personnel sur les aspects techniques et opérationnels du projet.",
      ],
      icon: Groups2Icon,
      color: "#3C60B5",
    },
    {
      timeline: "Q2-Q3",
      steps: "Développement du Proof of Concept",
      description: [
        "Concevoir et développer un prototype initial de DiploEra pour valider la faisabilité technique.",
        "Explorer les fonctionnalités clés, notamment l'émission, la vérification, et le stockage sécurisé des diplômes.",
      ],
      icon: BuildIcon,
      color: "#4265B7",
    },
    {
      timeline: "Q2-Q3",
      steps: "Plan Marketing et Promotion, Développement et Maintenance",
      description: [
        "Élaborer une stratégie de marketing qui englobe le lancement, la sensibilisation et la croissance continue.",
        "Établir un plan détaillé pour le développement continu, les mises à jour et la maintenance du projet.",
      ],
      icon: TrendingUpIcon,
      color: "#5D7BC0",
    },
    {
      timeline: "Q3-Q4",
      steps: "Construction du Design ",
      description: [
        "Développer l'architecture complète de DiploEra, en tenant compte des aspects de sécurité, d'interopérabilité, et d'évolutivité.",
        "Affiner les fonctionnalités et l'expérience utilisateur.",
      ],
      icon: DesignServicesIcon,
      color: "#6C87C6",
    },
    {
      timeline: "Q3 - Année Suivante",
      title: "Développement et Maintenance",
      description: [
        "Établir un plan détaillé pour le développement continu, les mises à jour et la maintenance du projet",
      ],
      icon: CodeIcon,
      color: "#7B94CC",
    },
    {
      timeline: "Q4-Année suivante",
      steps: "Évolution du Proof of Concept ",
      description: [
        "Élargir le Proof of Concept pour inclure des tests plus étendus et des retours d'utilisateurs.",
        "Identifier et résoudre tout problème identifié pendant cette phase.",
      ],
      icon: TimelineIcon,
      color: "#8AA2D0",
    },
    {
      timeline: "Année suivante",
      steps: "Déploiement réel",
      description: [
        "Déployer officiellement DiploEra sur le réseau blockchain, permettant aux utilisateurs d'émettre, partager, et vérifier des diplômes.",
        "Lancer des campagnes marketing pour promouvoir l'adoption de la plateforme.",
      ],
      icon: LaunchIcon,
      color: "#9AB0D5",
    },
    {
      timeline: "Tout au Long du Projet",
      steps: "Révision et Mise à Jour Régulières",
      description: [
        "Planifier des révisions régulières de la roadmap pour refléter les progrès réalisés, les nouvelles opportunités et les ajustements stratégiques éventuels.",
      ],
      icon: BrowserUpdatedIcon,
      color: "#B7C6E1",
    },
  ];

  return (
    <Container maxWidth="large" disableGutters={true}>
      <Header
        section={headerData.section}
        title={headerData.title}
        subtitle={headerData.subtitle}
        headerImg={headerData.headerImg}
      />
      {/* TODO: Explication de cette roadmap */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          py: 4,
          backgroundColor: "#0d1123",
          color: "#fff",
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          mb: 12,
          backgroundColor: "#0d1123",
          color: "#fff",
          py: 4,
        }}
      >
        {/* Roadmap introduction text */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          {roadmapIntroduction.map((item, index) => (
            <Typography
              key={index}
              variant={index < 2 ? "h1" : "subtitle2"}
              fontSize={index < 2 ? "2em" : "18px"}
              sx={{
                textAlign: "justify",
                my: 2,
                width: "80%",
                ...(index < 2 && {
                  backgroundImage: theme.palette.primary.mainGradient,
                  backgroundClip: "text",
                  color: "transparent",
                  fontSize: "30px",
                }),
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
        {/* Roadmap introduction */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <List
            sx={{
              maxWidth: "70%",
              bgcolor: "light.background",
              margin: "0 auto",
              px: 2,
              boxShadow: 3,
              borderRadius: 4,
            }}
          >
            {roadmapSteps.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <ListItemAvatar>
                  <item.icon
                    sx={{
                      fontSize: "40px",
                      color: "secondary.main",
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  primary={
                    <React.Fragment>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "light.text",
                          fontWeight: "bold",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          width: "100%",
                          textAlign: "right",
                          fontSize: 16,
                          color: "secondary.main",
                        }}
                        component="span"
                        variant="sutitle1"
                        color="text.primary"
                      >
                        {item.timeline}
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={item.description}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      {/* Roadmap section */}
      <IntersectionBlock title="DiploEra Roadmap" subtitle="Roadmap" />
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography variant="h5" sx={{ pb: 8 }}>
          Découvrez notre plan stratégique qui établit clairement les étapes
          cruciales de développement, du concept initial à l'intégration
          complète.
        </Typography>
        <Timeline position="alternate">
          {roadmapData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: item.color }}>
                  {/* Icon composant created dynamically */}
                  {
                    <item.icon
                      sx={{
                        fontSize: 40,
                      }}
                    />
                  }
                </TimelineDot>
                {index < roadmapData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2, my: "18px" }}>
                <Typography
                  variant="h5"
                  component="span"
                  sx={{ color: item.color, fontWeight: "bold" }}
                >
                  ({item.timeline}) {item.title || item.steps}
                </Typography>
                {item.description.map((desc, i) => (
                  <Typography key={i} variant="subtitle1">
                    {desc}
                  </Typography>
                ))}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Container>
  );
}

export default Roadmap;
