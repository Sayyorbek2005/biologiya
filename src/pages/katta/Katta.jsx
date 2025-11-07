import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mik from '../../assets/5.2/mikroskop_.png';
import './katta.css';

const Katta = () => {
  const navigate = useNavigate();
  const imgRef = useRef(null);
  const resultRef = useRef(null);
  const lensRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const result = resultRef.current;

    // Lens yaratish
    const lens = document.createElement('DIV');
    lens.classList.add('img-zoom-lens');
    img.parentElement.insertBefore(lens, img);
    lensRef.current = lens;

    const cx = result.offsetWidth / lens.offsetWidth;
    const cy = result.offsetHeight / lens.offsetHeight;
    result.style.backgroundImage = `url('${img.src}')`;
    result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;

    const moveLens = (e) => {
      e.preventDefault();
      const pos = getCursorPos(e);
      let x = pos.x - lens.offsetWidth / 2;
      let y = pos.y - lens.offsetHeight / 2;

      if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
      if (x < 0) x = 0;
      if (y > img.height - lens.offsetHeight) y = img.height - lens.offsetHeight;
      if (y < 0) y = 0;

      lens.style.left = x + 'px';
      lens.style.top = y + 'px';
      result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    };

    const getCursorPos = (e) => {
      const a = img.getBoundingClientRect();
      let x = e.pageX - a.left - window.pageXOffset;
      let y = e.pageY - a.top - window.pageYOffset;
      return { x, y };
    };

    lens.addEventListener('mousemove', moveLens);
    img.addEventListener('mousemove', moveLens);
    lens.addEventListener('touchmove', moveLens);
    img.addEventListener('touchmove', moveLens);

    return () => {
      lens.remove();
    };
  }, []);

  return (
    <div className="katta" data-aos="fade-down">

    <div className="max-width">
      <div className="pages-title">
        <h1>Mikroskopning tuzilishi bilan tanishish</h1>
        <div onClick={() => navigate(-1)} className="display-flex orqaga">
          <i className="bx bx-chevron-left"></i>
          <p>orqaga</p>
        </div>
      </div>


<div className="display-flex bar-mik-zoom">

      <div className="img-zoom-container">
        
        <img id="myimage" ref={imgRef} src={mik}  alt="Mikroskop" />
        <div id="myresult" ref={resultRef} className="img-zoom-result"></div>
      </div>
      <div>
          <ol>
            <li>
              Okulyar
            </li>
            <li>
              Tubus
            </li>
            <li>
              Revolver

            </li>
            <li>
              Obyektiv

            </li>
            <li>
              Tutqich

            </li>
            <li>
              Buyum stoli

            </li>
            <li>
              Makrovint

            </li>
            <li>

              Mikrovint
            </li>
            <li>

              Shtativ
            </li>
            <li>

              Ko'zgu
            </li>
          </ol>
        </div>
</div>
    </div>
    </div>
  );
};

export default Katta;
