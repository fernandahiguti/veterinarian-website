import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { HiReceiptRefund } from "react-icons/hi2";


const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading" id="Contact">Entre em contato</h1>
      <div className="contact-button-container">
      <a className="secondary-button" href="https://api.whatsapp.com/message/IMGBA4ZYP6L5I1?autoload=1&app_absent=0" target="_blank">
            Agende uma consulta <FiArrowRight />{" "}
      </a>
      </div>
     
    </div>
  );
};

export default Contact;