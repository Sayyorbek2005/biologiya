import React from 'react'
import { navigate, useNavigate } from 'react-router-dom'
import './labaratoria.css'

import buyumOynasi from '../../assets/5.1/buyum_oynasi.png'
import hovoncha from '../../assets/5.1/hovoncha.png'
import petri from '../../assets/5.1/petri_kosachasi.png'
import pinset from '../../assets/5.1/pinset_o_zi.png'
import pipetka from '../../assets/5.1/pipetka_jpg-removebg-preview.png'
import probirka from '../../assets/5.1/probirka-removebg-preview.png'
import qoplagich from '../../assets/5.1/qoplagich_jpg-removebg-preview.png'
import skalpel from '../../assets/5.1/skalpel-removebg-preview.png'
import voronka from '../../assets/5.1/voronka_remove.png'




const jihozlar = [
  {
    img: probirka,
    title: 'Probirka '
  },
  {
    title: 'Pipetka',
    img: pipetka,
  },
  {
    title: 'Pinset',
    img: pinset,
  },
  {
    title: 'Petri kosachasi',
    img: petri,
  },
  {
    title: 'Skalpel',
    img: skalpel,
  },
  {
    title: 'Hovuncha',
    img: hovoncha,
  },
  {
    title: 'Voronka',
    img: voronka,
  },
  {
    title: 'Buyum oynasi',
    img: buyumOynasi,
  },
  {
    title: 'Qoplagich oyna',
    img: qoplagich,
  },
];

console.log(jihozlar);


const Labaratoria = () => {

    const navigate = useNavigate();
  return (
    <div className='labaratoria' >
      <div className="max-width">

    <div className="pages-title">

      <h1>
        labaratoria jihozlari bilan tanishish.
          </h1>      
      <div onClick={() => navigate(-1)} className='display-flex orqaga'>
    <i class='bx bx-chevron-left'></i>
      <p>
        orqaga
      </p>
      </div>
      </div>

      {/* ? kerakli asboblar  */}
      <div className="cont-kerakli-asboblar">
        <h2>
          kerakli asboblar
        </h2>

        <div className="menu-kerakli-asboblar display-flex flex-wrap gap-50">
        {jihozlar.map((jihoz, index) => (
          <div className='jihoz-card' key={index}>
            <img src={jihoz.img} alt={jihoz.title} />
            <br /><br />
            <hr />
            <h2>{jihoz.title}</h2>
          </div>
        ))}


        </div>
      </div>

      </div>
    </div>
  )
}

export default Labaratoria
