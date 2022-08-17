import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'
import {IoLogoIonic} from 'react-icons/io'
import {FaLinkedinIn} from 'react-icons/fa'
import Logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" className='footer__logo' />
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__social">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><GrInstagram/></a>
        <a href="https://twitter.com"><BsTwitter/></a>
        <a href="https://linkedin.com"><FaLinkedinIn/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Prepared By <a href="#">❤ Hussain Hakimi ❤</a> all rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer