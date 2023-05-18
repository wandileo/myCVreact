import React from "react";
import Navbar from "../components/Navbar";
import Middle from "../components/Middle";
import Portfolio from "../components/Portfolio";
import Experiences from "../components/Experiences";
import Personality from "../components/Personality";
import Connect from "../components/Connect";
import Footer from "../components/Footer";

const CvHome = () => {
  return (
    <div>
      <Navbar />
      <Middle />
      <Portfolio />
      <Experiences />
      <Personality />
      <Connect />
      <Footer />

    </div>
  );
};

export default CvHome;
