import React from "react";
import { Box, Container, Typography } from "@mui/material";

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
    title: "Titre de la section Roadmap",
    subtitle: "Subtitle de la section RoadMap",
  };

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
      <IntersectionBlock title="DiploEra Roadmap" subtitle="Roadmap" />
      <Box>
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
