
// ? imgs

import imgDash from '../../assets/bosh-sahifa-imgs/topimg.png'
import cardTwoo from '../../assets/bosh-sahifa-imgs/7-sinf.png'
// import FirstCard from '../firstCard/FirstCard'


import './dashboard.css'
import { NavLink } from 'react-router-dom'



const Dashboard = () => {

  
  return (
    <div className='dashboard' data-aos="fade-left">
      <div className="max-width">

{/* ? header */}
      <header className='display-flex'>
      <img className='logo-img' src={imgDash} alt="" />
        <h1>Biologiya fanidan vertual labaratoria ishlar.</h1>
      </header>

      {/* ? cards */}
      <div className='display-flex gap-50 dashboard-card' >
        <div className="2-card card display-flex">
          <img src={cardTwoo} alt="twoo" />
          <div>

          <p>
            Har bir hujayra — hayotning mo‘jizasi. Har bir kashfiyot — yangi dunyoga eshik dir. Biologiya olamiga xush kelibsiz. O‘rganing, kuzating va  kashf eting.!
          </p>
        <NavLink to='FirstCard' >
          <button>7 - sinf</button>

        </NavLink>
          </div>
          </div>
        
      </div>

      </div>
    </div>
  )
}

export default Dashboard
