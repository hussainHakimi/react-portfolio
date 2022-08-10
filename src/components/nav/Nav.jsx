import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiCustomerService2Line} from 'react-icons/ri'
import {BiMessageRounded} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => {setActiveNav('#')}} title="Home"><AiOutlineHome/></a>
      <a href="#about" onClick={() => {setActiveNav('#about')}} className={activeNav ==='#about' ? 'active' : ''} title="About"><AiOutlineUser/></a>
      <a href="#experience" onClick={() => {setActiveNav('#experience')}} className={activeNav ==='#experience' ? 'active' : ''} title="Experience"><BiBook/></a>
      <a href="#services" onClick={() => {setActiveNav('#services')}} className={activeNav ==='#services' ? 'active' : ''} title="Services"><RiCustomerService2Line/></a>
      <a href="#contact" onClick={() => {setActiveNav('#contact')}} className={activeNav ==='#contact' ? 'active' : ''} title="Contact"><BiMessageRounded/></a>
    </nav>
  )
}

export default Nav