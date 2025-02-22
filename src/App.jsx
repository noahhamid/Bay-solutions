import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing Components
import NavBar from "./components/navbar";
import Hero from "./components/herosection";
import Why_us from "./components/why-us";
import Offer from "./components/offer";
import Testimonial from "./components/testmonial";
import Partners from "./components/partners";
import Pricing from "./components/pricing";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Custom from "./components/custom";
import Contact from "./components/contact"; // Contact page import
import About from "./components/about"; // About page import

const App = () => {
  return (
    <Router>
      <div className="bg-gradient-to-tl from-[#0c3045] to-[#1d1e39] min-h-screen max-w-screen font-poppins md:px-8 xl:px-24">
        <NavBar />
        <Routes>
          {/* This is the route for the homepage which has all sections */}
          <Route
            path="/"
            element={
              <div>
                <div id="home">
                  <Hero />
                </div>
                <div id="why-us">
                  <Why_us />
                </div>
                <div id="service">
                  <Offer />
                </div>
                <div id="partners">
                  <Partners />
                </div>
                <div id="pricing">
                  <Pricing />
                </div>
                <div id="testimonial">
                  <Testimonial />
                </div>
                <div id="custom">
                  <Custom />
                </div>
                <div id="faq">
                  <Faq />
                </div>
                <Footer />
              </div>
            }
          />

          {/* About and Contact are separate routes (standalone pages) */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
