import React from "react";
import BannerBackground from "../Assets/banner-background.png";
import BannerImage from "../Assets/banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" id="Home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Atendimento veterinário domiciliar
          </h1>
          <p className="primary-text">
            Cuidado profissional no conforto do lar do seu pet. 
            <br></br>
            Marque já a consulta e proporcione o melhor para o seu companheiro de quatro patas.
          </p>
          <a className="secondary-button" href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FIMGBA4ZYP6L5I1&e=AT2ZKBEA6PcxrPWVkrC6n-wvPaxDpP1kBanpueBztCNL64_m1BkwPHUz5yT_56icVRNnrklOMrRBV7BHHme78yXYvAw-mQ1RzNbmnHgRWzB0dpbtG6x7oxw" target="_blank" rel="noreferrer">
            Agende uma consulta <FiArrowRight />{" "}
          </a>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;