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
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => {setActiveNav('#')}}><AiOutlineHome/></a>
      <a href="#about" onClick={() => {setActiveNav('#about')}} className={activeNav ==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => {setActiveNav('#experience')}} className={activeNav ==='#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={() => {setActiveNav('#services')}} className={activeNav ==='#services' ? 'active' : ''}><RiCustomerService2Line/></a>
      <a href="#contact" onClick={() => {setActiveNav('#contact')}} className={activeNav ==='#contact' ? 'active' : ''}><BiMessageRounded/></a>
    </nav>
  )
}

export default Nav