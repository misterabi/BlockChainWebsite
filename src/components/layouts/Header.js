import { Container, Box, Typography } from "@mui/material";

function Header({section,title, subtitle, }) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "primary.main",
          //   backgroundImage: `url(${headerImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `contain`,
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "100%",
            mx: 10,
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontSize: "4.25rem",
            }}
          >
            {section}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              fontSize: "1.75rem",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: "1.25rem",
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
