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
        my: { xs: "5rem", sm: "7rem", md: "10rem" },
        padding: { xs: "20px", sm: "30px", md: "50px 0" },
        textAlign: "center",
        backgroundColor: "#f4f4f9",
        minHeight: "90vh",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          marginBottom: { xs: "20px", sm: "30px" },
          textAlign: { xs: "center", sm: "left" },
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        About Me
      </Typography>
      <Grid container spacing={4} alignItems="top" justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Avatar
            alt="Umair"
            src="./about.jpg"
            sx={{
              width: { xs: 150, sm: 200 },
              height: { xs: 150, sm: 200 },
              margin: { xs: "20px auto", sm: "30px" },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              marginBottom: { xs: "15px", sm: "20px" },
              fontSize: { xs: "1.5rem", sm: "1.75rem" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Hi, I'm Umair
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              marginBottom: { xs: "15px", sm: "20px" },
              textAlign: { xs: "center", sm: "left" },
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            I am a Front Developer with a passion for creating beautiful and
            functional web applications. I have a strong background in React and
            Material-UI, and I love to learn new technologies and improve my
            skills. In my free time, I enjoy reading, hiking, and exploring new
            places.
          </Typography>
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
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
          <Divider sx={{ marginY: { xs: "10px", sm: "20px" } }} />
          <Typography
            variant="h6"
            component="h3"
            sx={{
              marginBottom: { xs: "10px", sm: "15px" },
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Skills
          </Typography>
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
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
          <Divider sx={{ marginY: { xs: "10px", sm: "20px" } }} />
          <Typography
            variant="h6"
            component="h3"
            sx={{
              marginBottom: { xs: "10px", sm: "15px" },
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Experience
          </Typography>
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
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
          <Divider sx={{ marginY: { xs: "10px", sm: "20px" } }} />
          <Typography
            variant="h6"
            component="h3"
            sx={{
              marginBottom: { xs: "10px", sm: "15px" },
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Personal Interests
          </Typography>
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
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
          <Divider sx={{ marginY: { xs: "10px", sm: "20px" } }} />
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontStyle: "italic",
              textAlign: { xs: "center", sm: "left" },
            }}
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
