import React from "react";
import { FiArrowRight } from "react-icons/fi";


const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading" id="Contact">Entre em contato</h1>
      <div className="contact-button-container">
      <a className="secondary-button" href="https://wa.me/5511960715867" target="_blank" rel="noreferrer">
            Agende uma consulta <FiArrowRight />{" "}
      </a>
      </div>
     
    </div>
  );
};

export default Contact;