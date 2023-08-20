import React from "react";
import Vaccines from "../Assets/vaccination.png";
import Appointments from "../Assets/appoitments.png";
import BloodTests from "../Assets/blood-test.png";
import Travel from "../Assets/travel.png";
import Microchip from "../Assets/microchip.png";
import Tests from "../Assets/tests.png";

const Services = () => {
  const workInfoData = [
    {
      image: Vaccines,
      title: "Vacinação",
    },
    {
      image: Appointments,
      title: "Consultas",
    },
    {
      image: BloodTests,
      title: "Exames",
    },
    {
      image: Travel,
      title: "Certificado para viajar",
    },
    {
      image: Microchip,
      title: "Microchipagem",
    },
    {
      image: Tests,
      title: "Testes FIV e Felv",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading" id="Services">Serviços</p>
        <h1 className="primary-heading">Como funciona</h1>
        <p className="primary-text">
          Atendimento na cidade de São Paulo e algumas regiões do ABC.
          Com o atendimento na casa do pet, ele se sente muito mais seguro gerando menos stress.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;