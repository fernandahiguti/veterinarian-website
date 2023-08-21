import React from "react";
import Logo from "../Assets/Logo.svg";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer-wrapper">

        <div>
        <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <a href="https://instagram.com/vet.fercecchetto" target="_blank" rel="noreferrer">
          <BiLogoInstagramAlt />
          </a>
        </div>
        <div>
        </div>
      </div>
  );
};

export default Footer;