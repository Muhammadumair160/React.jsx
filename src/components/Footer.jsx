import React from "react";
import {
  Box,
  Typography,
  Link,
  Container,
  Grid,
  Icon,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import JoinInnerIcon from "@mui/icons-material/JoinInner";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: "primary.main",
        color: "white",
        mt: 8,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          paddingTop: "50px",
          paddingBottom: "30px",
          justifyContent: "center",
          fontSize: "bold",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} paddingBottom={"50px"}>
            <Icon>
              <JoinInnerIcon sx={{ fontSize: 40, mb: 1 }} />
            </Icon>
            <Typography
              variant="body2"
              textAlign="left"
              pr={2}
              fontSize={"17px"}
            >
              Your Company is committed to providing excellent service and
              support to our customers.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ paddingTop: { xs: 4, md: 0 } }}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" fontSize={"17px"}>
              Email: info@yourcompany.com
              <br />
              Phone: +1-123-456-7890
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ paddingTop: { xs: 4, md: 0 } }}>
            <Typography variant="h6" gutterBottom>
              Social Media
            </Typography>
            <IconButton
              component={Link}
              href="https://www.facebook.com"
              color="inherit"
              sx={{ mr: 1 }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.youtube.com"
              color="inherit"
              sx={{ mr: 1 }}
            >
              <YouTubeIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.instagram.com"
              color="inherit"
            >
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" mt={3}>
          © {new Date().getFullYear()} Your Company. All rights reserved. Made
          with by Umair
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
