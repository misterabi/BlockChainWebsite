import { Box } from "@mui/material";

function ElementHighlight({ img, title, description }) {
    const styles = {
        container: {
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            marginTop: "15px",
            textAlign: "center"
        },
        icon: {
            fontSize: "1.5rem"
        },
        title: {
            fontSize: "1.75rem",
            fontWeight: "bold",
            marginBottom: "8px",
            textAlign: "center"
        },
        description: {
            fontSize: "1.25rem",
            color: "#616161" // Couleur de la description
        }
    };
    return (
        <Box className="paper-card" style={styles.container}>
            <Box>
                <img src={img} alt="" width={300} />
            </Box>
            <h2 style={styles.title}>{title}</h2>
            <p style={styles.description}>{description}</p>
        </Box>
    );
}

export default ElementHighlight;
