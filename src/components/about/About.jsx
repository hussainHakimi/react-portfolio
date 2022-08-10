import React from 'react'
import './about.css'
import ABI from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container"></div>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ABI} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>+2 Years Working</small>
            </article>
          </div>
        </div>
    </section>
  )
}

export default About