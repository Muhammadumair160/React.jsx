import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  Box,
  Divider,
} from "@mui/material";

const paymentPlans = [
  {
    title: "Premium",
    oldPrice: "Rs1999",
    save: "SAVE 72%",
    price: "Rs559/mo",
    additional: "+3 months FREE",
    renewalPrice: "Rs1099/mo when you renew",
    features: [
      "100 Websites",
      "Managed WordPress",
      "100 GB SSD Storage",
      "Hostinger Website Builder",
      "Free Domain (Rs2,299 Value)",
      "Free Automatic Website Migration",
      "Free Email",
      "Unlimited Free SSL",
      "Weekly Backups",
      "Starter WooCommerce",
      "Free CDN",
      "Dedicated IP Address",
      "Priority Support",
    ],
    buttonText: "Choose Plan",
  },
  {
    title: "Business",
    oldPrice: "Rs2499",
    save: "SAVE 64%",
    price: "Rs899/mo",
    additional: "+3 months FREE",
    renewalPrice: "Rs1899/mo when you renew",
    features: [
      "100 Websites",
      "Managed WordPress",
      "200 GB NVMe Storage",
      "Hostinger Website Builder",
      "Free Domain (Rs2,299 Value)",
      "Free Automatic Website Migration",
      "Free Email",
      "Unlimited Free SSL",
      "Daily Backups (Rs8,280 Value)",
      "Basic WooCommerce Optimisation",
      "Free CDN",
      "Dedicated IP Address",
      "Priority Support",
    ],
    buttonText: "Choose Plan",
    mostPopular: true,
  },
  {
    title: "Cloud Startup",
    oldPrice: "Rs5999",
    save: "SAVE 58%",
    price: "Rs2,499/mo",
    additional: "+3 months FREE",
    renewalPrice: "Rs4,499/mo when you renew",
    features: [
      "300 Websites",
      "Managed WordPress",
      "200 GB NVMe Storage",
      "Hostinger Website Builder",
      "Free Domain (Rs2,299 Value)",
      "Free Automatic Website Migration",
      "Free Email",
      "Unlimited Free SSL",
      "Daily Backups (Rs8,280 Value)",
      "Standard WooCommerce",
      "Free CDN",
      "Dedicated IP Address",
      "Priority Support",
    ],
    buttonText: "Choose Plan",
  },
];

export const PaymentPlan = () => {
  const handleScroll = () => {
    document
      .getElementById("credit-card")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Typography
        variant="h3"
        textAlign="center"
        marginTop="10rem"
        gutterBottom
      >
        Pick Your Perfect Plan
      </Typography>
      <Typography variant="body1" textAlign="center" marginBottom="20px">
        Get started in complete confidence. Our 30-day money-back guarantee
        means it's risk-free.
      </Typography>
      <Box
        sx={{
          padding: 4,
          maxWidth: "60vw",
          margin: "0 auto",
          backgroundColor: "#f4f7f9",
        }}
      >
        <Grid container spacing={5} justifyContent="center">
          {paymentPlans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography
                    padding="5px"
                    variant="h5"
                    component="div"
                    gutterBottom
                    textAlign="center"
                    color="#c4c8cf"
                    backgroundColor="#19678f"
                  >
                    {plan.title}
                  </Typography>
                  <Divider sx={{ my: 2 }} />

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textDecoration: "line-through" }}
                    >
                      {plan.oldPrice}
                    </Typography>
                    <Typography variant="body2" color="error">
                      {plan.save}
                    </Typography>
                  </Box>
                  <Typography variant="h3" component="div">
                    {plan.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {plan.additional}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {plan.renewalPrice}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          py="10px"
                        >
                          {feature}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={handleScroll}
                  >
                    {plan.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" my={4}>
          <Button
            size="small"
            variant="text"
            onClick={() => {
              alert(
                "The plans shall be pre-paid, not divided in installments. The amount presented represents the product's total price split by the number of months your plan will be live."
              );
            }}
          >
            Payment terms
          </Button>
        </Box>
      </Box>
    </>
  );
};
