import { Box, Grid, Typography, Paper } from "@mui/material";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import CampaignIcon from "@mui/icons-material/Campaign";

const services = [
  {
    icon: <DesignServicesIcon fontSize="large" style={{ color: "white" }} />,
    title: "Design",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    icon: <CodeIcon fontSize="large" style={{ color: "white" }} />,
    title: "Web Developer",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    icon: <CampaignIcon fontSize="large" style={{ color: "white" }} />,
    title: "Marketing",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
];

const ServiceCard = ({ icon, title, description, highlighted }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Paper
      elevation={highlighted ? 6 : 3}
      sx={{
        padding: { xs: "16px", sm: "24px" },
        textAlign: "center",
        backgroundColor: highlighted ? "#fff" : "transparent",
        color: highlighted ? "#000" : "#000",
        borderRadius: highlighted ? "16px" : "0",
        transform: highlighted ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        boxShadow: highlighted ? "0px 8px 16px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <Box
        sx={{
          marginBottom: { xs: "12px", sm: "16px" },
          backgroundColor: "#FF6F61",
          borderRadius: "8px",
          display: "inline-flex",
          padding: { xs: "12px", sm: "16px" },
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.75rem" },
          paddingTop: { xs: "16px", sm: "24px", md: "32px" },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{
          fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
        }}
      >
        {description}
      </Typography>
    </Paper>
  </Grid>
);

const ServicesSection = () => (
  <Box
    py={{ xs: 3, sm: 4, md: 5 }}
    textAlign="center"
    bgcolor="#f4f4f9"
    sx={{ minHeight: "60vh" }}
  >
    <Typography
      variant="overline"
      display="block"
      sx={{
        fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
        color: "#FF6F61",
        mb: { xs: 1, sm: 2, md: 3 },
      }}
    >
      Services
    </Typography>
    <Typography
      variant="h4"
      gutterBottom
      sx={{
        fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
      }}
    >
      We provide the best services
    </Typography>
    <Grid container spacing={3} justifyContent="center">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          highlighted={index === 1}
        />
      ))}
    </Grid>
  </Box>
);

export default ServicesSection;
