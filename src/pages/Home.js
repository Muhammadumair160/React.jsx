import React from "react";
import { Hero } from "../components/Hero";
import FeaturesSection from "../components/Feature";
import ServicesSection from "../components/Services";
import Reviews from "../components/Reviews";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <ServicesSection />
      <Portfolio />
      <Reviews />
    </>
  );
};

export default Home;
