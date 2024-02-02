import React from 'react'
import { Container, Typography, Button, Grid } from '@mui/material'

function Home() {
  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{ height: '80vh' }}
      >
        <Grid item xs={12}>
          <Typography variant="h2" align="center" gutterBottom>
            Bienvenue sur notre Plateforme Blockchain
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Utilisez la blockchain pour le stockage et l'authentification des
            diplômes.
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary" href="#a-propos">
                En savoir plus
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" href="#connexion">
                Se connecter
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
