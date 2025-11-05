import './firstCard.css';
import { NavLink, useNavigate } from 'react-router-dom';

import one from '../../assets/7-sinf/mikroskop va lupa.jpg';
import two from '../../assets/7-sinf/2-lab.jpg';
import three from '../../assets/7-sinf/yomgir chuv.jpg';
import four from '../../assets/7-sinf/barda organik.avif';
import five from '../../assets/7-sinf/5.webp';
import six from '../../assets/7-sinf/bargning nafas olishi.webp';
import seven from '../../assets/7-sinf/transpiratsiya.jpg';
import eight from '../../assets/7-sinf/tufelka.jpg';

const FirstCard = () => {
  const navigate = useNavigate();
  return (
    <div className="firs-card" data-aos="fade-left">

    <div className='max-width'>
      <div className="first-card-nav">

      <h1 className='first-card-title'>
        Elementlar bilan tanishuv va laboratoriya ishlar.
      </h1>
      
      <div onClick={() => navigate(-1)} className='display-flex orqaga'>
    <i class='bx bx-chevron-left'></i>
      <p>
        orqaga
      </p>
      </div>
      </div>

      

      <menu className='display-flex flex-wrap gap-30 first-card'>

        <NavLink to="/Labaratoria">
          <div className="menu-card card-1">
            <img src={one} alt='one' />
            <p className="descript">Laboratoriya jihozlari bilan tanishish</p>
          </div>
        </NavLink>

        <NavLink to="/Katta">
          <div className="menu-card card-2">
            <img src={two} alt="two" />
            <p className="descript">Kattalashtirib ko'rsatuvchi asboblar</p>
          </div>
        </NavLink>

        <NavLink to="/Yomgir">
          <div className="menu-card card-6">
            <img src={three} alt="six" />
            <p className="descript">Yomg'ir chuvalchangining ichki va tashqi tuzilishi bilan tanishish</p>
          </div>
        </NavLink>

        <NavLink to="/Zambrug">
          <div className="menu-card card-4">
            <img src={four} alt="four" />
            <p className="descript">Zamburug' hujayrasining tuzilishini mikroskop ostida kuzatish</p>
          </div>
        </NavLink>

        <NavLink to="/Osimlik">
          <div className="menu-card card-5">
            <img src={five} alt="five" />
            <p className="descript">O'simliklarda moddalar transportini o'rganish</p>
          </div>
        </NavLink>
        <NavLink to="/Osimliklarda">
          <div className="menu-card card-3">
            <img src={six} alt="three" />
            <p className="descript">O'simlik to'qimasidan vaqtinchalik preparat tayyorlash</p>
          </div>
        </NavLink>


        <NavLink to="/Bargda">
          <div className="menu-card card-7">
            <img src={seven} alt="seven" />
            <p className="descript">Bargda organik moddalarning hosil bo'lishini o'rganish</p>
          </div>
        </NavLink>

        <NavLink to="/Tufelka">
          <div className="menu-card card-8">
            <img src={eight} alt="eight" />
            <p className="descript">Tufelka infuzoriyasining harakatlanishini kuzatish</p>
          </div>
        </NavLink>

      </menu>
    </div>
    </div>
  );
};

export default FirstCard;
