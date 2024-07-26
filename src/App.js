import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About.js";
import Portfolio from "./pages/ProjectDetails.js";
import Contact from "./pages/Contact.js";
import { Payment } from "./pages/Payment.js";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import ProjectDetails from "./pages/ProjectDetails.js";
import ScrollToTop from "./components/ScroolltoTop.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/project/:id" element={<ProjectDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="payment" element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
