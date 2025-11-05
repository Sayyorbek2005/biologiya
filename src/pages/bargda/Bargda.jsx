import React, { useState } from 'react'
import { navigateavigate, useNavigate } from 'react-router-dom'

// ? img
import buyumOynasi from '../../assets/5.1/buyum_oynasi.png';
import hovoncha from '../../assets/5.1/hovoncha.png';
import petri from '../../assets/5.1/petri_kosachasi.png';
import pinset from '../../assets/5.1/pinset_o_zi.png';
import pipetka from '../../assets/5.1/pipetka_jpg-removebg-preview.png';
import probirka from '../../assets/5.1/probirka-removebg-preview.png';
import qoplagich from '../../assets/5.1/qoplagich_jpg-removebg-preview.png';
import skalpel from '../../assets/5.1/skalpel-removebg-preview.png';
import voronka from '../../assets/5.1/voronka_remove.png';

const steps = [
  "Idishdagi iliq suvga shakar soling.",
  "Shakarli suvga achitqi zamburug'idan soling va iliq joyga qo'ying.",
  "Ko'pchib chiqqan xamirtuturshtan pipetka yordamida oling.",
  "Buyum oynasiga tomizing.",
  "Ustidan qoplagich oynani yoping.",
  "Tayyor bo'lgan preparatni mikroskop ostida kuzating.",
];


const Bargda = () => {
  const navigate = useNavigate();
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
      return (
    <div data-aos="fade-down">
        <div className="max-width">

    <div className="pages-title">

      <h1>
        Bargda organik moddalarning hosil bo'lishini kuztish
          </h1>      
      <div onClick={() => navigate(-1)} className='display-flex orqaga'>
    <i class='bx bx-chevron-left'></i>
      <p>
        orqaga
      </p>
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
                {steps.map((step, index) => (
                  <div key={index} className="accordion-item">
                    <button
                      onClick={() => toggle(index)}
                      className={`accordion-header ${openIndex === index ? "active" : ""}`}
                    >
                      <span>{index + 1}. {step}</span>
                      <span className="arrow">{openIndex === index ? "▾" : "▸"}</span>
                    </button>
      
                    {openIndex === index && (
                      <div className="accordion-content">
                        <p>
                          Bu bosqichda siz <b>{step.toLowerCase()}</b> ishini bajarishingiz kerak.
                        </p>
                        <div className="buttons">
                          <button className="do-btn zambrug-cont-btn">Ishni bajarish</button>
                          <button className="refresh-btn zambrug-cont-btn">Yangilash</button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

      </div>
      
    </div>
  )
}

export default Bargda
