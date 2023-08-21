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
          <a className="secondary-button" href="https://wa.me/5511960715867" target="_blank" rel="noreferrer">
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