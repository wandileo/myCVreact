import React from "react";
import Navbar from "../components/Navbar";
import Middle from "../components/Middle";
import Portfolio from "../components/Portfolio";
import Experiences from "../components/Experiences";
import Personality from "../components/Personality";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Modals from "../components/Modals";

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
      <Copyright />
      <Modals />

    </div>
  );
};

export default CvHome;
