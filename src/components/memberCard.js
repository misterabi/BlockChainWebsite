import React from "react";

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Chip,
  ListItem,
  List,
  Divider,
  ListItemText,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

function TeamMember({
  name,
  bio,
  exp,
  skills,
  avatar,
  linkedIn,
  instagram,
  github,
}) {
  const styles = {
    experience : {
      color : 'text.secondary',
    }
  }

  return (
    <Card sx={{ maxWidth: '20%' }}>
      <CardMedia sx={{ height: 225 }} image={avatar} title="team member" />
      <CardContent>
        {/* Name */}
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        {/* Social Media */}
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {linkedIn && (
          <IconButton href={linkedIn} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="large" />
          </IconButton>
        )}
        {instagram && (
          <IconButton
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
        )}
        {github && (
          <IconButton href={github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize="large" />
          </IconButton>
        )}
      </CardActions>
        {/* Bio */}
        <Typography variant="body2" color="text.secondary">
          {bio}
        </Typography>
        {/* Exp */}
        <Box
          sx={{
            m: 2,
          }}
        >
          <Typography variant="h6" color="text.secondary">
            Expérience
          </Typography>
          <List>
            {exp.map((experience, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText primary={experience}/>
                </ListItem>
                <Divider variant="middle" component="li" />
              </React.Fragment>
            ))}
          </List>
        </Box>
        {/* Skills */}
        <Box
          sx={{
            p: 2,
          }}
        >
          <Typography variant="h6" color="text.secondary">
            Compétences
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 0.7,
              tp: 2,
            },
          }}
        >
          {skills.map((skill, index) => (
            <React.Fragment key={index}>
              <Chip label={skill} />
            </React.Fragment>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default TeamMember;
