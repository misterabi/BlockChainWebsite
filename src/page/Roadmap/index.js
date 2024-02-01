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

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

import Header from "components/layouts/Header";
import IntersectionBlock from "components/IntersectionBlock";

function Roadmap() {
  const headerData = {
    section: "Roadmap",
    title: "Notre Route vers l'Innovation Éducative",
    subtitle:
      "Redéfinir la confiance dans l'éducation en éliminant la contrefaçon des diplômes grâce à la puissance de la technologie blockchain.",
  };

  const roadmapSteps = [
    {
      timeline: "Q1 : Janv - Mars",
      title: "Définition de la Vision et des Objectifs ",
      description:
        "Clarification de notre direction et de nos objectifs spécifiques.",
      icon: VisibilityIcon,
    },
    {
      timeline: "Q1-Q3 : Janv - Sept",
      title: " Création d'un Use Case et Développement du Proof of Concept",
      description:
        "Identification des cas d'utilisation spécifiques et développement d'un prototype pour valider la faisabilité technique.",
      icon: VisibilityIcon,
    },
    {
      timeline: "Q3 - Q4 : Juill - Déc",
      title: "Intégration de l'Équipe et Construction du Design",
      description:
        "Recrutement des membres clés de l'équipe et développement de l'architecture complète de DiploEra.",
      icon: VisibilityIcon,
    },
    {
      timeline: "Q4 : Année suivante (Oct - Déc)",
      title: "Évolution du Proof of Concept",
      description:
        "Élargissement du Proof of Concept pour inclure des tests plus étendus.",
      icon: VisibilityIcon,
    },
    {
      timeline: " Année suivante (Janv - Déc)",
      title: "Déploiement",
      description:
        "Déploiement officiel de DiploEra permettant aux utilisateurs d'émettre, partager et vérifier des diplômes.",
      icon: VisibilityIcon,
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
    },
    {
      timeline: "Q1-Q2",
      title: "Création d'un Use Case",
      description: [
        "Identifier les cas d'utilisation spécifiques de DiploEra dans la certification éducative.",
        "Développer des scénarios concrets d'application du service.",
      ],
      icon: AssignmentIcon,
    },
    {
      timeline: "Q1-Q2",
      steps: "Développement du Modèle Tokenomics",
      description: [
        "Concevoir un modèle économique basé sur le token de DiploEra, détaillant son utilisation, sa distribution, et son impact sur l'écosystème.",
      ],
      icon: AccountBalanceIcon,
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
    },
    {
      timeline: "Q2-Q3",
      steps: "Développement du Proof of Concept",
      description: [
        "Concevoir et développer un prototype initial de DiploEra pour valider la faisabilité technique.",
        "Explorer les fonctionnalités clés, notamment l'émission, la vérification, et le stockage sécurisé des diplômes.",
      ],
      icon: BuildIcon,
    },
    {
      timeline: "Q2-Q3",
      steps: "Plan Marketing et Promotion, Développement et Maintenance",
      description: [
        "Élaborer une stratégie de marketing qui englobe le lancement, la sensibilisation et la croissance continue.",
        "Établir un plan détaillé pour le développement continu, les mises à jour et la maintenance du projet.",
      ],
      icon: TrendingUpIcon,
    },
    {
      timeline: "Q3-Q4",
      steps: "Construction du Design ",
      description: [
        "Développer l'architecture complète de DiploEra, en tenant compte des aspects de sécurité, d'interopérabilité, et d'évolutivité.",
        "Affiner les fonctionnalités et l'expérience utilisateur.",
      ],
      icon: DesignServicesIcon,
    },
    {
      timeline: "Q3 - Année Suivante",
      title: "Développement et Maintenance",
      description: [
        "Établir un plan détaillé pour le développement continu, les mises à jour et la maintenance du projet",
      ],
      icon: CodeIcon,
    },
    {
      timeline: "Q4-Année suivante",
      steps: "Évolution du Proof of Concept ",
      description: [
        "Élargir le Proof of Concept pour inclure des tests plus étendus et des retours d'utilisateurs.",
        "Identifier et résoudre tout problème identifié pendant cette phase.",
      ],
      icon: TimelineIcon,
    },
    {
      timeline: "Année suivante",
      steps: "Déploiement réel",
      description: [
        "Déployer officiellement DiploEra sur le réseau blockchain, permettant aux utilisateurs d'émettre, partager, et vérifier des diplômes.",
        "Lancer des campagnes marketing pour promouvoir l'adoption de la plateforme.",
      ],
      icon: LaunchIcon,
    },
    {
      timeline: "Tout au Long du Projet",
      steps: "Révision et Mise à Jour Régulières",
      description: [
        "Planifier des révisions régulières de la roadmap pour refléter les progrès réalisés, les nouvelles opportunités et les ajustements stratégiques éventuels.",
      ],
      icon: BrowserUpdatedIcon,
    },
  ];

  return (
    <Container maxWidth="large" disableGutters={true}>
      <Header
        section={headerData.section}
        title={headerData.title}
        subtitle={headerData.subtitle}
      />
      {/* TODO: Explication de cette roadmap */}
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h6">
          Bienvenue sur la roadmap de DiploEra, l'avenir de la certification
          éducative décentralisée.
        </Typography>
        <Typography>
          Notre parcours est marqué par des étapes cruciales, chaque trimestre
          apportant une avancée significative dans notre quête pour redéfinir la
          confiance dans l'éducation.
        </Typography>
        <Box>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {roadmapSteps.map((item, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      {item.title}
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        | {item.timeline}
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
      <IntersectionBlock title="DiploEra Roadmap" subtitle="Roadmap" />
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5" sx={{ pb: 8 }}>
          Découvrez notre plan stratégique qui établit clairement les étapes
          cruciales de développement, du concept initial à l'intégration
          complète.
        </Typography>
        <Timeline position="alternate">
          {roadmapData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot>
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
                <Typography variant="h5" component="span">
                  ({item.timeline}) {item.title || item.steps}
                </Typography>
                {item.description.map((desc, i) => (
                  <Typography key={i}>{desc}</Typography>
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
