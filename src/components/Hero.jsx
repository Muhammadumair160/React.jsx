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
        padding: "90px",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "5vw", color: "#fff", marginRight: "40rem" }}
      >
        Hi There, I'm Umair
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          marginTop: "15px",
          fontSize: "3vw",
          color: "#fff",
          marginRight: "40rem",
        }}
      >
        Front Developer
      </Typography>
      <Typography
        variant="body1"
        sx={{
          lineHeight: "2.5",
          color: "#fff",
          textAlign: "left",
          marginRight: "40rem",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptate
        reiciendis nesciunt sed, commodi aperiam iste rem blanditiis dicta
        impedit sequi. Ratione odit, excepturi, numquam a libero maxime aut. Rem
      </Typography>
      <Button
        variant="contained"
        sx={{ marginTop: "20px", marginRight: "40rem" }}
        onClick={handleScroll}
      >
        Learn more
        <ArrowDownwardIcon />
      </Button>
    </Stack>
  );
};
