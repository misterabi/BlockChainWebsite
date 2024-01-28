import { Box } from "@mui/material";

function ElementHighlight({ icon: Icon, title, description }) {
    const styles = {
        container: {
            textAlign: 'justify',
            width: '30%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
            paddingTop: '15px',
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
            width: 80,
            height: 80,
            color: 'primary.main'
            }}
        />}</div>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>
      </Box>
  );
}

export default ElementHighlight;
