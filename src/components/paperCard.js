import { Paper, Typography } from "@mui/material";

function PaperCard({ icon: Icon, title, description }) {
  const styles = {
    paper: {
      padding: "10px",
      margin: "15px 0px",
      textAlign: "center",
      width: "25%",
      height: "23.125rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "8px",
      color: "primary.main", // Couleur du titre
    },
    description: {
      fontSize: "1.15em",
      color: "#616161", // Couleur de la description
    },
  };
  return (
    <Paper style={styles.paper}>
      <div>
        {Icon && (
          <Icon
            sx={{
              fontSize: 2,
              width: 80,
              height: 80,
              color: "primary.main",
            }}
          />
        )}
        {/* Vérifiez si l'icône est fournie avant de l'afficher */}
      </div>
      <div>
        <Typography variant="h6" component="h3" style={styles.title}>
          {title}
        </Typography>
        <Typography variant="h6" component="h3" style={styles.description}>
          {description}
        </Typography>
      </div>
    </Paper>
  );
}
export default PaperCard;
