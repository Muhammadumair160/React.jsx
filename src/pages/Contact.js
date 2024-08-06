import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Clear the form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      sx={{
        my: isSmallScreen ? "5rem" : "10rem",
        padding: "50px 0",
        textAlign: "center",
        backgroundColor: "#f4f4f9",
        minHeight: "60vh",
      }}
    >
      <Typography variant="h3" component="h1" sx={{ marginBottom: "20px" }}>
        Contact Us
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: isSmallScreen ? "0 10px" : "0",
        }}
        noValidate
        onSubmit={handleSubmit}
      >
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          sx={{ marginBottom: "20px", maxWidth: "600px" }}
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          sx={{ marginBottom: "20px", maxWidth: "600px" }}
        />
        <TextField
          name="phone"
          label="Phone"
          variant="outlined"
          fullWidth
          value={formData.phone}
          onChange={handleChange}
          sx={{ marginBottom: "20px", maxWidth: "600px" }}
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={formData.message}
          onChange={handleChange}
          sx={{ marginBottom: "20px", maxWidth: "600px" }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ maxWidth: "600px" }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default ContactUs;
