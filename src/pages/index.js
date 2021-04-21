import React, { useState } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Project from "../components/Projects";
import { homeObjThree } from "../components/InfoSection/Data";
// import About from "../components/About";
// import About from "../components/About";
// import { homeObjTwo } from "../components/About/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      {/* <InfoSection {...homeObjOne} /> */}

      {/* <About {...homeObjTwo} /> */}

      {/* <InfoSection {...homeObjTwo} /> */}
      <Project />
      <InfoSection {...homeObjThree} />
    </>
  );
};
export default Home;
