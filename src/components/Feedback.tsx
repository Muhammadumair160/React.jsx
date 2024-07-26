import React from "react";
import { Box, TextField, Rating, Button, Typography } from "@mui/material";

const Feedback = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission, e.g., send feedback to server
    console.log("Feedback submitted!");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Feedback
      </Typography>
      <Rating name="feedback-rating" sx={{ mb: 2 }} />
      <TextField
        label="Your Feedback"
        multiline
        rows={4}
        variant="outlined"
        sx={{ width: "100%", mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default Feedback;
