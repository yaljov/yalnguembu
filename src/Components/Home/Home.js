import React from "react";

import Service from "../Services/Service";
import About from "../About/About";
import NavBar from "../NavBar/NavBar";
import Skill from "../Skill/Skill";
import Projet from "../Projets/Projet";
import Header from "../Header/Header";
import Testimonies from "../Testimonies/Testimonies";
import Contact from "../Contact/Contact";
import Box from "@mui/material/Box";
import "../../Assets/styles/styles.css";
import "../../Assets/styles/Responsive.css";
import TopArrowIcon from "@mui/icons-material/ArrowUpward";

export default function Home() {
  
  const ScrollBtn = () => {
    return (
      <a href="#header" className="scrollBtn Show" title="go to top">
        <TopArrowIcon htmlColor="#f1f1f1" alt="arrow up" title="arrow up" />
      </a>
    );
  };
  return (
    <div>
      <Box className="main">
        <Header />
        <NavBar />
        <Service />
        <About />
        <Skill />
        <Projet />
        <Testimonies />
        <Contact />
        <ScrollBtn />
      </Box>
    </div>
  );
}
