import React from "react";
import { Box, Container, Typography } from "@mui/material";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

function Roadmap() {
    const roadmapData = [
        {
            timeline : 'Q1',
            steps : 'Définition de la Vision et des Objectifs du Projet',
            description : ['Identifier les besoins éducatifs et les problèmes liés à la contrefaçon de diplômes.', 'Définir clairement la vision à long terme et les objectifs spécifiques de DiploEra.'],
        }, 
        {
            timeline : 'Q1-Q2',
            title: 'Création d\'un Use Case',
            description: [
                'Identifier les cas d\'utilisation spécifiques de DiploEra dans la certification éducative.', 
                'Développer des scénarios concrets d\'application du service.', 
            ],
        },
        {
            timeline : 'Q1-Q2',
            steps: 'Développement du Modèle Tokenomics',
            description: ['Concevoir un modèle économique basé sur le token de DiploEra, détaillant son utilisation, sa distribution, et son impact sur l\'écosystème.',
            ],
        },
        {
            timeline : 'Q2',
            title : 'Définition de l\'Équipe',
            description : [
                'Identifier les compétences nécessaires pour chaque aspect du projet et constituer une équipe diversifiée et compétente.',
                'Recruter et intégrer les membres clés de l\'équipe technique, marketing, et opérationnelle.',
                'Former le personnel sur les aspects techniques et opérationnels du projet.',
            ],
        },
        {
            timeline : 'Q2-Q3',
            steps : 'Développement du Proof of Concept',
            description : [
                'Concevoir et développer un prototype initial de DiploEra pour valider la faisabilité technique.', 
                'Explorer les fonctionnalités clés, notamment l\'émission, la vérification, et le stockage sécurisé des diplômes.'],
        },
        {
            timeline : 'Q2-Q3',
            steps: 'Plan Marketing et Promotion, Développement et Maintenance',
            description: [
                'Élaborer une stratégie de marketing qui englobe le lancement, la sensibilisation et la croissance continue.',
                'Établir un plan détaillé pour le développement continu, les mises à jour et la maintenance du projet.',
            ],
        },
        {
            timeline : 'Q3-Q4',
            steps : 'Construction du Design ',
            description: [
                'Développer l\'architecture complète de DiploEra, en tenant compte des aspects de sécurité, d\'interopérabilité, et d\'évolutivité.',
                'Affiner les fonctionnalités et l\'expérience utilisateur.'],
        },
        {
            timeline : 'Q3 - Année Suivante',
            title : 'Développement et Maintenance',
            description : [
                'Établir un plan détaillé pour le développement continu, les mises à jour et la maintenance du projet',
            ],
        },
        {
            timeline : 'Q4-Année suivante',
            steps: 'Évolution du Proof of Concept ',
            description: [
                'Élargir le Proof of Concept pour inclure des tests plus étendus et des retours d\'utilisateurs.',
                'Identifier et résoudre tout problème identifié pendant cette phase.',
            ],
        },
        {
            timeline : 'Année suivante',
            steps: 'Déploiement réel',
            description: [
                'Déployer officiellement DiploEra sur le réseau blockchain, permettant aux utilisateurs d\'émettre, partager, et vérifier des diplômes.',
                'Lancer des campagnes marketing pour promouvoir l\'adoption de la plateforme.'
            ],
        },
        {
            timeline: 'Tout au Long du Projet',
            steps: 'Révision et Mise à Jour Régulières',
            description: [  
                'Planifier des révisions régulières de la roadmap pour refléter les progrès réalisés, les nouvelles opportunités et les ajustements stratégiques éventuels.',
            ],
        },
    ]
  return (
    <Container maxWidth="large">
      <Box>
        <Typography>Header</Typography>
      </Box>
      <Box>
        {/* <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                (Q1) Définition de la Vision et des Objectifs du Projet
              </Typography>
              <Typography>
                Identifier les besoins éducatifs et les problèmes liés à la
                contrefaçon de diplômes.
              </Typography>
              <Typography>
                Définir clairement la vision à long terme et les objectifs
                spécifiques de DiploEra.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline> */}
        <Timeline position="alternate">
          {roadmapData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                {index < roadmapData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" component="span">
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
