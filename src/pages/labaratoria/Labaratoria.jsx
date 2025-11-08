import React, { useState } from 'react';
import { Flex, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import './labaratoria.css';

// ? images
import buyumOynasi from '../../assets/5.1/buyum_oynasi.png';
import hovoncha from '../../assets/5.1/hovoncha.png';
import petri from '../../assets/5.1/petri_kosachasi.png';
import pinset from '../../assets/5.1/pinset_o_zi.png';
import pipetka from '../../assets/5.1/pipetka_jpg-removebg-preview.png';
import probirka from '../../assets/5.1/probirka-removebg-preview.png';
import qoplagich from '../../assets/5.1/qoplagich_jpg-removebg-preview.png';
import skalpel from '../../assets/5.1/skalpel-removebg-preview.png';
import voronka from '../../assets/5.1/voronka_remove.png';

// ? data
const jihozlar = [
  { title: 'Probirka', img: probirka },
  { title: 'Pipetka', img: pipetka },
  { title: 'Pinset', img: pinset },
  { title: 'Petri kosachasi', img: petri },
  { title: 'Skalpel', img: skalpel },
  { title: 'Hovuncha', img: hovoncha },
  { title: 'Voronka', img: voronka },
  { title: 'Buyum oynasi', img: buyumOynasi },
  { title: 'Qoplagich oyna', img: qoplagich },
];

const Labaratoria = () => {
  const navigate = useNavigate();

  // Modal holati
  const [openModal, setOpenModal] = useState(false);
  const [tanlanganJihoz, setTanlanganJihoz] = useState(null);

  // Cardga click funksiyasi
  const handleCardClick = (jihoz) => {
    setTanlanganJihoz(jihoz);
    setOpenModal(true);
  };

  return (
    <div className='labaratoria' data-aos="fade-down">
      <div className="max-width">
        {/* Sarlavha */}
        <div className="pages-title">
          <h1>Labaratoriya jihozlari bilan tanishish</h1>
          <div onClick={() => navigate(-1)} className='display-flex orqaga'>
            <i className='bx bx-chevron-left'></i>
            <p>Orqaga</p>
          </div>
        </div>

        {/* Jihozlar */}
        <div className="cont-kerakli-asboblar">
          <h2>Kerakli asboblar</h2>

          <Flex vertical gap="middle" align="flex-start">
            <div className="menu-kerakli-asboblar display-flex flex-wrap gap-50">
              {jihozlar.map((jihoz, index) => (
                <div
                  className='jihoz-card'
                  key={index}
                  onClick={() => handleCardClick(jihoz)}
                >
                  <img src={jihoz.img} alt={jihoz.title} />
                  <hr />
                  <h2>{jihoz.title}</h2>
                </div>
              ))}
            </div>
          </Flex>
        </div>
      </div>

      {/* Modal */}
      <Modal
        title={tanlanganJihoz?.title}
        centered
        open={openModal}
        onCancel={() => setOpenModal(false)}
        footer={null}
        width={600}
      >
        {tanlanganJihoz && (
          <div className='modal-content' style={{ textAlign: 'center' }}>
            <img
              src={tanlanganJihoz.img}
              alt={tanlanganJihoz.title}
              style={{ width: '70%', marginBottom: '20px' }}
            />
            <h2>{tanlanganJihoz.title}</h2>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Labaratoria;
