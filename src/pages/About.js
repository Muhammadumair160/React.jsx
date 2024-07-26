import React from "react";
import {
  Container,
  Typography,
  Grid,
  Avatar,
  Box,
  Divider,
} from "@mui/material";

const About = () => {
  return (
    <Container
      sx={{
        my: "10rem",
        padding: "50px 0",
        textAlign: "center",
        backgroundColor: "#f4f4f9",
        minHeight: "90vh",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{ marginBottom: "30px", textAlign: "left" }}
      >
        About Me
      </Typography>
      <Grid container spacing={4} alignItems="top" justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Avatar
            alt="Umair"
            src="./about.jpg"
            sx={{
              width: 200,
              height: 200,
              margin: "30px ",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h5" component="h2" sx={{ marginBottom: "20px" }}>
            Hi, I'm Umair
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ marginBottom: "20px", textAlign: "left" }}
          >
            I am a Front Developer with a passion for creating beautiful and
            functional web applications. I have a strong background in React and
            Material-UI, and I love to learn new technologies and improve my
            skills. In my free time, I enjoy reading, hiking, and exploring new
            places.
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="body1"
              component="p"
              sx={{ marginBottom: "10px" }}
            >
              - Detail-oriented developer with a knack for problem-solving.
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ marginBottom: "10px" }}
            >
              - Strong believer in the power of teamwork and collaboration.
            </Typography>
            <Typography variant="body1" component="p">
              - Always eager to take on new challenges and learn new skills.
            </Typography>
          </Box>
          <Divider sx={{ marginY: "20px" }} />
          <Typography variant="h6" component="h3" sx={{ marginBottom: "10px" }}>
            Skills
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="body1" component="p">
              - React.js
            </Typography>
            <Typography variant="body1" component="p">
              - Material-UI
            </Typography>
            <Typography variant="body1" component="p">
              - JavaScript (ES6+)
            </Typography>
            <Typography variant="body1" component="p">
              - HTML5 & CSS3
            </Typography>
            <Typography variant="body1" component="p">
              - Git & GitHub
            </Typography>
            <Typography variant="body1" component="p">
              - Responsive Design
            </Typography>
          </Box>
          <Divider sx={{ marginY: "20px" }} />
          <Typography variant="h6" component="h3" sx={{ marginBottom: "10px" }}>
            Experience
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="body1" component="p">
              <strong>Front Developer</strong> at XYZ Company
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ marginBottom: "10px" }}
            >
              Developed and maintained web applications using React and
              Material-UI. Collaborated with designers and backend developers to
              create seamless user experiences.
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Web Developer Intern</strong> at ABC Corp
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ marginBottom: "10px" }}
            >
              Assisted in the development of internal tools and customer-facing
              applications. Gained hands-on experience with modern web
              technologies.
            </Typography>
          </Box>
          <Divider sx={{ marginY: "20px" }} />
          <Typography variant="h6" component="h3" sx={{ marginBottom: "10px" }}>
            Personal Interests
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="body1" component="p">
              - Reading technology blogs and staying updated with the latest
              trends in web development.
            </Typography>
            <Typography variant="body1" component="p">
              - Hiking and enjoying the beauty of nature.
            </Typography>
            <Typography variant="body1" component="p">
              - Exploring new places and experiencing different cultures.
            </Typography>
            <Typography variant="body1" component="p">
              - Playing chess and solving puzzles.
            </Typography>
          </Box>
          <Divider sx={{ marginY: "20px" }} />
          <Typography
            variant="body1"
            component="p"
            sx={{ fontStyle: "italic" }}
          >
            "Strive not to be a success, but rather to be of value." - Albert
            Einstein
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
