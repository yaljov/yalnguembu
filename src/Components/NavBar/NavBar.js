import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../Assets/Images/logo-web-horizontal.png";
import { IconButton } from "@mui/material";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const handelOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className="navbarContainer" id="navbar">
      <ul className={open ? "NavBar resp" : "NavBar"}>
        <li className="secret">
          {" "}
          <IconButton onClick={handelOpen} title="open nav">
            <MenuIcon className="iconSecret" alt="open navbar" />
          </IconButton>{" "}
        </li>
        <li className="logo">
          <a href="/" className="a imgBox" title="home">
            <img src={logo} className="img" alt="logo" />
          </a>
        </li>
        <li>
          <a href="#services" className="a" title="services">
            Services
          </a>{" "}
        </li>
        <li>
          <a href="#about" className="a active" title="about">
            A propos
          </a>
        </li>
        <li>
          <a href="#skill" className="a" title="skill">
            Competences
          </a>
        </li>
        <li>
          <a href="#projects" className="a" title="projects">
            PortFolio
          </a>
        </li>
        <li>
          <a href="#testimonie" className="a" title="testimonie">
            Teimoignages
          </a>
        </li>
        <li className="socials-medias-icons">
          <a href="m.facebook.com" title="my facebook">
            <FacebookIcon className="nav_icon" alt="facebook" />
          </a>
          <a href="m.facebook.com" title="my instagram">
            <InstagramIcon className="nav_icon" alt="instagram" />
          </a>
          <a href="m.facebook.com" title="my twitter">
            <TwitterIcon className="nav_icon" alt="twitter" />
          </a>
          <a href="m.facebook.com" title="my linkedin">
            <LinkedInIcon className="nav_icon" alt="linkedin" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
