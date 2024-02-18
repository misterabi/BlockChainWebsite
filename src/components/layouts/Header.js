import { Box, Typography } from "@mui/material";

function Header({ section, title, subtitle, headerImg }) {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${headerImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `contain`,
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontSize: "4.5em",
            }}
          >
            {section}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              fontSize: "1.75rem",
              mb: 2,
            }}
          >
            {title}
          </Typography>

          {subtitle.map((line, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                textAlign: "center",
                fontSize: "1.25rem",
                lineHeight: 1.75,
              }}
            >
              {line}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
