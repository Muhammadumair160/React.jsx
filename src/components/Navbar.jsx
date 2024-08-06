import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FitbitSharpIcon from "@mui/icons-material/FitbitSharp";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Navbar = () => {
  const [navBackground, setNavBackground] = useState("transparent");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY >= 100) {
        setNavBackground("#CAF4FF");
      } else {
        setNavBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = (
    <>
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
    </>
  );

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
        {isMobile ? (
          <>
            <IconButton
              style={{ backgroundColor: "#0F67B1" }}
              size="large"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <IconButton
                size="large"
                color="inherit"
                aria-label="close"
                onClick={toggleDrawer(false)}
                sx={{
                  backgroundColor: "#0F67B1",
                  borderRadius: "50%",
                  padding: 1,
                  alignSelf: "flex-end",
                  margin: 1,
                  "& svg": {
                    fontSize: "2rem", // Increase the size of the CloseIcon
                  },
                }}
              >
                <CloseIcon sx={{ color: "white" }} />
              </IconButton>
              <List sx={{ color: "blue" }}>
                <ListItem
                  button
                  component={NavLink}
                  to="/"
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem
                  button
                  component={NavLink}
                  to="/about"
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem
                  button
                  component={NavLink}
                  to="/portfolio"
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary="Portfolio" />
                </ListItem>
                <ListItem
                  button
                  component={NavLink}
                  to="/contact"
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary="Contact" />
                </ListItem>
                <ListItem
                  button
                  component={NavLink}
                  to="/payment"
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary="Hire us" />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <Stack
            direction="row"
            spacing={5}
            sx={{
              textAlign: "justify",
              fontWeight: "400",
              alignItems: "center",
            }}
          >
            {navLinks}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};
