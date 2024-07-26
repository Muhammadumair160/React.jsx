import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import MouseIcon from "@mui/icons-material/Mouse";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PedalBikeIcon from "@mui/icons-material/PedalBike";

const features = [
  {
    icon: <SchoolIcon fontSize="large" color="error" />,
    title: "Fast Learn",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem natus esse ullam exercitationem soluta ad! Assumenda eum",
  },
  {
    icon: <MouseIcon fontSize="large" color="error" />,
    title: "Creative",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem natus esse ullam exercitationem soluta ad! Assumenda eum",
  },
  {
    icon: <SupportAgentIcon fontSize="large" color="error" />,
    title: "Friendly Support",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem natus esse ullam exercitationem soluta ad! Assumenda eum",
  },
  {
    icon: <PedalBikeIcon fontSize="large" color="error" />,
    title: "Work Hard",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Dolorem natus esse ullam exercitationem soluta ad! Assumenda eum",
  },
];

const Feature = ({ icon, title, description }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Paper
      elevation={3}
      style={{
        padding: "16px",
        textAlign: "center",
        backgroundColor: "#424242",
        color: "#ffffff",
      }}
    >
      {icon}
      <Typography variant="h6" color="white" fontWeight={"20px"} gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="white">
        {description}
      </Typography>
    </Paper>
  </Grid>
);

const FeaturesSection = () => (
  <Box id="features-section" color="white" py={3} px={4} paddingTop={"100px"}>
    <Typography variant="h4" align="center" marginBottom="30px" color="error">
      Features
    </Typography>
    <Grid container spacing={2}>
      {features.map((feature, index) => (
        <Feature
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </Grid>
  </Box>
);

export default FeaturesSection;
