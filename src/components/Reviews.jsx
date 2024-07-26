import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Rating,
  Container,
  Paper,
  Grid,
  IconButton,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    comment: "Excellent service and friendly staff!",
    date: "07/01/2024",
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment: "Great experience, but the waiting time was a bit long.",
    date: "06/25/2024",
  },
  {
    name: "Alice Johnson",
    rating: 5,
    comment: "Loved it! Will definitely come back again.",
    date: "06/20/2024",
  },
  {
    name: "Michael",
    rating: 3,
    comment: "It was okay, but I expected more from the service.",
    date: "06/30/2024",
  },
  {
    name: "Johnson",
    rating: 5,
    comment: "Loved it! Will definitely come back again.",
    date: "06/20/2024",
  },
  {
    name: "Brown",
    rating: 3,
    comment: "It was okay, but I expected more from the service.",
    date: "06/30/2024",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
      );
    }, 300);
  };

  const handleNextClick = () => {
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 300);
  };

  const itemsToShow = 3;
  const items = reviews.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <Container sx={{ mt: 4, minHeight: "30vh", paddingTop: "30px" }}>
      <Typography variant="h4" textAlign="center" marginBottom="20px">
        Customer Reviews
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <IconButton onClick={handlePrevClick}>
          <ArrowBackIosIcon
            sx={{
              fontSize: "large",
              marginRight: "16px",
              backgroundColor: "#3FA2F6",
              borderRadius: "30px",
              padding: "16px",
            }}
          />
        </IconButton>
        <Grid container spacing={3}>
          {items.map((review, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Avatar sx={{ bgcolor: deepPurple[500], mr: 2 }}>
                    {review.name[0]}
                  </Avatar>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {review.name}
                  </Typography>
                </Box>
                <Rating name="read-only" value={review.rating} readOnly />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {review.comment}
                </Typography>
                <Typography variant="caption" sx={{ mt: 1, color: "gray" }}>
                  {review.date}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <IconButton onClick={handleNextClick}>
          <ArrowForwardIosIcon
            sx={{
              fontSize: "large",
              marginLeft: "16px",
              backgroundColor: "#3FA2F6",
              borderRadius: "30px",
              padding: "16px",
            }}
          />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Reviews;
