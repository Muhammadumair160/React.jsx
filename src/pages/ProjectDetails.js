import React from "react";
import { Container, Typography, Grid, Card, CardMedia } from "@mui/material";

const projectDetails = [
  {
    id: 1,
    title: "Project 1",
    description: "Detailed description of project 1.",
    images: [
      "/portfolioImages/portfolio1.png",
      "/portfolioImages/portfolio1-2.png",
    ],
    techStack: ["React", "Node.js"],
  },
  {
    id: 2,
    title: "Project 2",
    description: "Detailed description of project 2.",
    images: [
      "/portfolioImages/portfolio2.png",
      "/portfolioImages/portfolio2-2.png",
    ],
    techStack: ["Angular", "Express"],
  },
  {
    id: 3,
    title: "Project 3",
    description: "Detailed description of project 3.",
    images: [
      "/portfolioImages/portfolio3.png",
      "/portfolioImages/portfolio3-2.png",
    ],
    techStack: ["Vue", "Laravel"],
  },
  {
    id: 4,
    title: "Project 4",
    description: "Detailed description of project 4.",
    images: [
      "/portfolioImages/portfolio4.png",
      "/portfolioImages/portfolio4-2.png",
    ],
    techStack: ["React", "Django"],
  },
  {
    id: 5,
    title: "Project 5",
    description: "Detailed description of project 5.",
    images: [
      "/portfolioImages/portfolio5.png",
      "/portfolioImages/portfolio5-2.png",
    ],
    techStack: ["Svelte", "Flask"],
  },
  {
    id: 6,
    title: "Project 6",
    description: "Detailed description of project 6.",
    images: [
      "/portfolioImages/portfolio6.png",
      "/portfolioImages/portfolio6-2.png",
    ],
    techStack: ["React", "Spring Boot"],
  },
];

const Portfolio = () => {
  return (
    <Container
      sx={{
        marginTop: "10rem",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{ marginBottom: "20px", textAlign: "center" }}
      >
        Projects
      </Typography>
      {projectDetails.map((project) => (
        <div key={project.id} style={{ marginBottom: "40px" }}>
          <Typography variant="h4" component="h2" sx={{ marginBottom: "20px" }}>
            {project.title}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "20px" }}>
            {project.description}
          </Typography>
          <Typography variant="h6" component="h3" sx={{ marginBottom: "20px" }}>
            Tech Stack
          </Typography>
          <ul>
            {project.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <Grid container spacing={4}>
            {project.images.map((image, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={`Project Image ${index + 1}`}
                    height="200"
                    image={image}
                    title={`Project Image ${index + 1}`}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  );
};

export default Portfolio;
