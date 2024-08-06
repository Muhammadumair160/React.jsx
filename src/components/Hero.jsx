import React from "react";
import { Typography, Button, Stack } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Hero = () => {
  const handleScroll = () => {
    document
      .getElementById("features-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Stack
      sx={{
        backgroundImage: 'url("./heroimage.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "30px", sm: "50px", md: "70px", lg: "90px" },
        textAlign: { xs: "center", sm: "center", md: "center" },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "5rem" },
          color: "#fff",
          marginBottom: { xs: "20px", sm: "30px", md: "40px" },
        }}
      >
        Hi There, I'm Umair
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
          color: "#fff",
          marginBottom: { xs: "15px", sm: "20px", md: "25px" },
        }}
      >
        Front Developer
      </Typography>
      <Typography
        variant="body1"
        sx={{
          lineHeight: { xs: "1.5", sm: "2", md: "2.5" },
          color: "#fff",
          textAlign: { xs: "center", sm: "center", md: "left" },
          marginBottom: { xs: "20px", sm: "30px", md: "40px" },
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptate
        reiciendis nesciunt sed, commodi aperiam iste rem blanditiis dicta
        impedit sequi. Ratione odit, excepturi, numquam a libero maxime aut. Rem
      </Typography>
      <Button
        variant="contained"
        sx={{
          fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" },
          padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 24px" },
          marginTop: { xs: "15px", sm: "20px", md: "25px" },
        }}
        onClick={handleScroll}
      >
        Learn more
        <ArrowDownwardIcon sx={{ ml: 1 }} />
      </Button>
    </Stack>
  );
};
