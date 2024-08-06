import React, { useState } from "react";
// eslint-disable-next-line
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import {
  Container,
  TextField,
  Box,
  Button,
  Paper,
  Grid,
  Typography,
  Autocomplete,
} from "@mui/material";

const Services = ["Design", "Web Developer", "Marketing"];

export const CreditCard = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCVC] = useState("");
  const [focus, setFocus] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Autocomplete
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event, newValue) => {
    setSelectedOption(newValue);
  };

  // onsubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, number, expiry, cvc, selectedOption, email, phone });
    // Clear input fields
    setName("");
    setNumber("");
    setExpiry("");
    setCVC("");
    setSelectedOption(null);
    setFocus("");
    setEmail("");
    setPhone("");
  };

  return (
    <Container sx={{ mt: { xs: 2, sm: 4 }, px: { xs: 2, sm: 4 } }}>
      <Typography id="credit-card" variant="h3" textAlign="center" my="30px">
        Credit Card Information
      </Typography>
      <Paper
        elevation={6}
        sx={{
          p: { xs: 2, sm: 4 },
          maxWidth: "100%",
          mx: "auto",
          backgroundColor: "#EEF5FF",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 2, sm: 4 },
          }}
        >
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
            style={{ width: "100%" }}
          />
        </Box>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Cardholder Name"
                variant="outlined"
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Phone"
                variant="outlined"
                type="tel"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Card Number"
                variant="outlined"
                type="tel"
                name="number"
                placeholder="Card Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Expiry Date"
                variant="outlined"
                type="text"
                name="expiry"
                placeholder="MM/YY Expiry"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="CVC"
                variant="outlined"
                type="tel"
                name="cvc"
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCVC(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                sx={{ py: { xs: 1, sm: 2 } }}
                blurOnSelect
                options={Services}
                value={selectedOption}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Select Service"
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};
