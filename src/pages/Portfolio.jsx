import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const projectItems = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of project 1",
    image: "projectImages/project1.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of project 2",
    image: "projectImages/project2.jpg",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of project 3",
    image: "projectImages/project3.jpg",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description of project 4",
    image: "projectImages/Project4.png",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Description of project 5",
    image: "projectImages/project5.png",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Description of project 6",
    image: "projectImages/project6.png",
  },
];

const Portfolio = () => {
  return (
    <Container
      sx={{ padding: "50px 0", textAlign: "center", minHeight: "70vh" }}
    >
      <Typography variant="h3" component="h1" sx={{ marginBottom: "20px" }}>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projectItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to={`/portfolio/project/${item.id}`}
                  size="small"
                  color="primary"
                  variant="contained"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
