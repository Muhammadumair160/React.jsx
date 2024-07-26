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
  <Grid item sm={4}>
    <Paper
      elevation={highlighted ? 6 : 3}
      style={{
        padding: "24px",
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
        style={{
          marginBottom: "16px",
          backgroundColor: "#FF6F61",
          borderRadius: "8px",
          display: "inline-flex",
          padding: "16px",
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h6"
        gutterBottom
        fontWeight="30px"
        paddingTop={"100px"}
      >
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary" fontWeight="20px">
        {description}
      </Typography>
    </Paper>
  </Grid>
);

const ServicesSection = () => (
  <Box py={5} textAlign="center">
    <Typography
      variant="overline"
      display="block"
      fontSize="20px"
      gutterBottom
      style={{ color: "#FF6F61" }}
    >
      Services
    </Typography>
    <Typography variant="h4" gutterBottom>
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