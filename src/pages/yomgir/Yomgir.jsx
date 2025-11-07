import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import chuvalchang from "../../assets/7.3/tiniq_chuval.jpg";
import chuvalchangIch from "../../assets/7.3/chuvalchang_ichki.png";
import "./yomgir.css";

const createZoom = (img, result, lensSize = 100) => {
  if (!img || !result) return () => {};

  // linza elementini yaratamiz va o'lchamini aniq belgilaymiz
  const lens = document.createElement("div");
  lens.className = "img-zoom-lens";
  lens.style.width = `${lensSize}px`;
  lens.style.height = `${lensSize}px`;
  img.parentElement.insertBefore(lens, img);

  // hisoblash va yangilash funksiyasi
  const setup = () => {
    const cx = result.offsetWidth / lens.offsetWidth;
    const cy = result.offsetHeight / lens.offsetHeight;
    result.style.backgroundImage = `url('${img.src}')`;
    result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;
    return { cx, cy, lensW: lens.offsetWidth, lensH: lens.offsetHeight };
  };

  // harakat funksiyasi (pointer unified)
  const onPointerMove = (e) => {
    e.preventDefault();
    const rect = img.getBoundingClientRect();
    // event.pageX / pageY used; for pointer events use clientX + page offsets
    const pageX = e.pageX ?? (e.clientX + window.pageXOffset);
    const pageY = e.pageY ?? (e.clientY + window.pageYOffset);

    const posX = pageX - rect.left - window.pageXOffset;
    const posY = pageY - rect.top - window.pageYOffset;

    const { cx, cy, lensW, lensH } = setup(); // recalc to be safe on resize

    let x = posX - lensW / 2;
    let y = posY - lensH / 2;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > img.width - lensW) x = img.width - lensW;
    if (y > img.height - lensH) y = img.height - lensH;

    lens.style.left = `${x}px`;
    lens.style.top = `${y}px`;
    result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
  };

  // show/hide lens only when pointer is over image
  const onPointerEnter = () => {
    lens.style.display = "block";
  };
  const onPointerLeave = () => {
    lens.style.display = "none";
  };

  // add listeners
  img.style.touchAction = "none"; // allow pointer events for touch
  img.addEventListener("pointermove", onPointerMove);
  lens.addEventListener("pointermove", onPointerMove);
  img.addEventListener("pointerenter", onPointerEnter);
  img.addEventListener("pointerleave", onPointerLeave);
  lens.addEventListener("pointerenter", onPointerEnter);
  lens.addEventListener("pointerleave", onPointerLeave);

  // recalc on resize
  const onResize = () => {
    setup();
  };
  window.addEventListener("resize", onResize);

  // initial setup & hide lens initially
  setup();
  lens.style.display = "none";

  // cleanup function
  return () => {
    try {
      img.removeEventListener("pointermove", onPointerMove);
      lens.removeEventListener("pointermove", onPointerMove);
      img.removeEventListener("pointerenter", onPointerEnter);
      img.removeEventListener("pointerleave", onPointerLeave);
      lens.removeEventListener("pointerenter", onPointerEnter);
      lens.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", onResize);
      lens.remove();
    } catch (err) {
      // ignore
    }
  };
};

const Yomgir = () => {
  const navigate = useNavigate();
  const imgRef1 = useRef(null);
  const resultRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const resultRef2 = useRef(null);

  useEffect(() => {
    // create zoom for both images; returns cleanup functions
    const cleanup1 = createZoom(imgRef1.current, resultRef1.current, 100);
    const cleanup2 = createZoom(imgRef2.current, resultRef2.current, 100);

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, []);

  return (
    <div className="yomgir" data-aos="fade-down">

    <div className="max-width">
      <div className="pages-title">
        <h1>Yomg‘ir chuvalchangi tuzilishini o‘rganish</h1>
        <div onClick={() => navigate(-1)} className="display-flex orqaga">
          <i className="bx bx-chevron-left"></i>
          <p>Orqaga</p>
        </div>
      </div>

      <div className="chuvalchang-container ch-c-1">
        <div className="img-zoom-container">
          <img ref={imgRef1} src={chuvalchang} alt="Chuvalchang tashqi" />
          <div ref={resultRef1} className="img-zoom-result" />
        </div>

        <div className="img-zoom-container ch-c-2">
          <img ref={imgRef2} src={chuvalchangIch} alt="Chuvalchang ichki" />
          <div ref={resultRef2} className="img-zoom-result" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Yomgir;
