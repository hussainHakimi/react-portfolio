import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/202.png'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am </h5>
        <h1>Hussain Hakimi</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        
          <HeaderSocial/>

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header