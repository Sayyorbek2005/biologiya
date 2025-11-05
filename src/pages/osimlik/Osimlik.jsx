import React from 'react'
import { navigate, useNavigate } from 'react-router-dom'

const Osimlik = () => {
  const navigate = useNavigate();
  return (
    <div>
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
      

      </div>
    </div>
  )
}

export default Osimlik
