import React from 'react'
import './about.css'
import ABI from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about' className='container'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="about__container">
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
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Client</h5>
              <small>200+ client</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Project</h5>
              <small>40+ Years Working</small>
            </article>

          </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo quibusdam iure at dolorum quae. Commodi est similique quisquam, repellat laborum dolorem possimus aut ea veritatis? Sequi inventore repudiandae voluptates.
            </p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About