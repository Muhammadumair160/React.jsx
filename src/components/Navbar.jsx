import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import FitbitSharpIcon from "@mui/icons-material/FitbitSharp";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [navBackground, setNavBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY >= 100) {
        setNavBackground("#CAF4FF"); // Change to your desired color when scrolling down
      } else {
        setNavBackground("transparent"); // Change to transparent or initial color when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar position="fixed" style={{ backgroundColor: navBackground }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="#0F67B1" aria-label="logo">
          <FitbitSharpIcon />
        </IconButton>
        <Typography
          variant="h5"
          component="div"
          color="#0F67B1"
          sx={{ flexGrow: 1, fontSize: "20px", fontWeight: "bold" }}
        >
          Portfolio Website
        </Typography>
        <Stack
          direction="row"
          spacing={5}
          sx={{ textAlign: "justify", fontWeight: "400", alignItems: "center" }}
        >
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "#0F67B1",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={{
              textDecoration: "none",
              color: "#0F67B1",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            style={{
              textDecoration: "none",
              color: "#0F67B1",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            style={{
              textDecoration: "none",
              color: "#0F67B1",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Contact
          </NavLink>
          <NavLink
            to="/payment"
            style={{
              textDecoration: "none",
              color: "#0F67B1",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <Button variant="contained" color="primary">
              Hire us
            </Button>
          </NavLink>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
