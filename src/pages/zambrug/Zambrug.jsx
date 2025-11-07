import React, { useState } from "react";
import {navigate, useNavigate } from 'react-router-dom';
import './zambrug.css';

// ? img
import buyumOynasi from '../../assets/5.4-labaratoria/buyum_oynasi.png';
import hovoncha from '../../assets/5.4-labaratoria/qoplagich_jpg-removebg-preview.png';
import petri from '../../assets/5.4-labaratoria/pipetka_jpg-removebg-preview.png';
import pinset from '../../assets/5.4-labaratoria/mikroskop-removebg-preview.png';
import pipetka from '../../assets/5.4-labaratoria/filtr_qg-removebg-preview.png';
import probirka from '../../assets/5.4-labaratoria/shakarrrr-removebg-preview.png';
import qoplagich from '../../assets/5.4-labaratoria/tuz-removebg-preview.png';
import skalpel from '../../assets/5.4-labaratoria/suv_kosada.jpg';
import voronka from '../../assets/5.4-labaratoria/achitqi-removebg-preview.png';

// ? img qoshiqcha 
import mikroskop from '../../assets/5.4-labaratoria/mikroskop-removebg-preview.png'
import qoshiqDroj from '../../assets/5.4-labaratoria/qoshiqda_droja-removebg-preview.png';
import qoshiqShakar from '../../assets/5.4-labaratoria/sugar_spoon-removebg-preview.png';
import suv from '../../assets/5.4-labaratoria/suv_kosada.jpg';
import drojliSuv from '../../assets/5.4-labaratoria/drojli_suv-removebg-preview.png'
import xamir from '../../assets/5.4-labaratoria/xamir.jpg'
import pipetkadaSuv from '../../assets/5.4-labaratoria/pipetkada_suv-removebg-preview.png'
import buyumYod from '../../assets/5.4-labaratoria/buyum_yod-removebg-preview.png'
import buyumQopOyna from '../../assets/5.4-labaratoria/buyum_qop_oyna_sariq.png'
import yeast from '../../assets/5.4-labaratoria/Yeast_3d.jpg'

const stepsData = [
  {
    text: "Idishdagi iliq suvga shakar soling.",
    img1: suv,
    img2: qoshiqShakar,
    resultImg: suv, // misol uchun
  },
  {
    text: "Shakarli suvga achitqi zamburug'idan soling va iliq joyga qo'ying.",
    img1: suv,
    img2: qoshiqDroj,
    resultImg: drojliSuv,
  },
  {
    text: "Ko'pchib chiqqan xamirtuturshtan pipetka yordamida oling.",
    img1: xamir,
    img2: petri,
    resultImg: pipetkadaSuv,
  },
  {
    text: "Buyum oynasiga tomizing.",
    img1: buyumOynasi,
    img2: pipetkadaSuv,
    resultImg: buyumYod,
  },
  {
    text: "Ustidan qoplagich oynani yoping.",
    img1: buyumYod,
    img2: hovoncha,
    resultImg: buyumQopOyna,
  },
  {
    text: "Tayyor bo'lgan preparatni mikroskop ostida kuzating.",
    img1: mikroskop,
    img2: buyumQopOyna,
    resultImg: yeast,
  },
];


const Zambrug = () => {
const [openIndex, setOpenIndex] = useState(null);
const [animate, setAnimate] = useState(false);
const [showResult, setShowResult] = useState(false);
const [activeIndex, setActiveIndex] = useState(null);

const navigate = useNavigate();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setAnimate(false);
    setShowResult(false);
  };

 const handleDoClick = (index) => {
  setActiveIndex(index);
  setAnimate(true);
  setTimeout(() => setShowResult(true), 1500);
};

 const handleRefresh = () => {
  setAnimate(false);
  setShowResult(false);
};

  return (
    <div className="cont-zambrug" data-aos="fade-down">
      <div className="max-width">
        <div className="pages-title zambrug">
          <h1>Zamburug' hujayrasining tuzilishini mikroskop ostida kuzatish</h1>
          <div onClick={() => navigate(-1)} className='display-flex orqaga'>
            <i className='bx bx-chevron-left'></i>
            <p>orqaga</p>
          </div>
        </div>

        {/* ? side bar */}
        <div className="side-bar">
          <div className="bar-img"><img src={buyumOynasi} alt="buyumOynasi" /></div>
          <div className="bar-img"><img src={hovoncha} alt="hovoncha" /></div>
          <div className="bar-img"><img src={petri} alt="petri" /></div>
          <div className="bar-img"><img src={pinset} alt="pinset" /></div>
          <div className="bar-img"><img src={pipetka} alt="pipetka" /></div>
          <div className="bar-img"><img src={probirka} alt="probirka" /></div>
          <div className="bar-img"><img src={qoplagich} alt="qoplagich" /></div>
          <div className="bar-img"><img src={skalpel} alt="skalpel" /></div>
          <div className="bar-img"><img src={voronka} alt="voronka" /></div>
        </div>

        {/* ? accordion */}
        <div className="accordion-container">
      {stepsData.map((step, index) => (
  <div key={index} className="accordion-item">
    <button
      onClick={() => toggle(index)}
      className={`accordion-header ${openIndex === index ? "active" : ""}`}
    >
      <span>{index + 1}. {step.text}</span>
      <span className="arrow">{openIndex === index ? "▾" : "▸"}</span>
    </button>

    {openIndex === index && (
      <div className="accordion-content">
        <div className={`animation-area ${animate && activeIndex === index ? "active" : ""}`}>
          {!showResult ? (
            <>
              <img src={step.img1} alt="img1" className="left-img" />
              <img src={step.img2} alt="img2" className="right-img" />
            </>
          ) : (
            <img src={step.resultImg} alt="result" className="result-img" />
          )}
        </div>

        <div className="buttons">
          <button
            className="do-btn zambrug-cont-btn"
            onClick={() => handleDoClick(index)}
          >
            Ishni bajarish
          </button>
          <button
            className="refresh-btn zambrug-cont-btn"
            onClick={() => handleRefresh(index)}
          >
            Yangilash
          </button>
        </div>
      </div>
    )}
  </div>
))}

        </div>
      </div>
    </div>
  );
};

export default Zambrug;
