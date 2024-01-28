import {
    Box,
    Typography,
  } from "@mui/material";

export default function IntersectionBlock({title,subtitle}) {
    return(
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            margin: '50px',
        }} >
            <Typography variant="h6" sx={{
                textTransform: "uppercase",
            }}>{subtitle}</Typography>
            <Typography  varint="h3"sx={{
                fontWeight: "bold",
                fontSize: 50,
            }}>{title}</Typography>
        </Box>
    );
};