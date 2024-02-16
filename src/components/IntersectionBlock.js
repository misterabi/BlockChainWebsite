import { Box, Typography } from "@mui/material";
import { theme } from "themes/theme";

export default function IntersectionBlock({ title, subtitle, bgColor }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: "50px",
        backgroundColor: bgColor ? `${bgColor}` : "inherit",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textTransform: "uppercase",
          color: "primary.main",
        }}
      >
        {subtitle}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontSize: 50,
          backgroundImage: theme.palette.primary.mainGradient,
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
