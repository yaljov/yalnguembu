import React, { useState } from "react";
// import DownloadIcon from "@mui/icons-material/Download";
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
          <IconButton onClick={handelOpen}>
            <MenuIcon className="iconSecret" />
          </IconButton>{" "}
        </li>
        <div className="logo">
          <a href="/" className="a imgBox">
            <img src={logo} className="img" alt="logo" />
          </a>
        </div>
        <li>
          <a href="#services" className="a">
            Services
          </a>{" "}
        </li>
        <li>
          <a href="#about" className="a active">
            A propos
          </a>
        </li>
        <li>
          <a href="#skill" className="a">
            Competences
          </a>
        </li>
        <li>
          <a href="#projects" className="a">
            PortFolio
          </a>
        </li>
        <li>
          <a href="#testimonie" className="a">
            Teimoignages
          </a>
        </li>
        <div className="socials-medias-icons">
          <a href="m.facebook.com">
            <FacebookIcon  className="nav_icon"/>
          </a>
          <a href="m.facebook.com">
            <InstagramIcon className="nav_icon" />
          </a>
          <a href="m.facebook.com">
            <TwitterIcon className="nav_icon" />
          </a>
          <a href="m.facebook.com">
            <LinkedInIcon className="nav_icon" />
          </a>
        </div>
      </ul>
    </nav>
  );
}
