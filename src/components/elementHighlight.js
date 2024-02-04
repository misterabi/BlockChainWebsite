import { Box } from "@mui/material";

function ElementHighlight({ icon: Icon, title, description }) {
    const styles = {
        container: {
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
            marginTop: '15px',
            textAlign: 'center',
          },
          icon: {
            fontSize: '1.5rem',
          },
        title: {
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '8px',
          textAlign: 'center',
        },
        description: {
          fontSize: '1rem',
          color: '#616161', // Couleur de la description
        },
    }
  return (
      <Box className="paper-card" style={styles.container}>
        <div className="icon">{Icon && <Icon sx= {{
            fontSize: 2,
            width: 70,
            height: 70,
            color: 'primary.main',
            }}
        />}</div>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>
      </Box>
  );
}

export default ElementHighlight;
