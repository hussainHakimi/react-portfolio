import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Experience I Have?</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front Development</h3>
          <div className="experience__content">
            <article className='experience__detail'>
              <BsPatchCheckFill/>
              <h4>HTML5</h4>
              <small>Master</small>
            </article>
            <article className='experience__detail'>
              <BsPatchCheckFill/>
              <h4>CSS3</h4>
              <small>Master</small>
            </article>
            <article className='experience__detail'>
              <BsPatchCheckFill/>
              <h4>Javascript</h4>
              <small>Master</small>
            </article>
            <article className='experience__detail'>
              <BsPatchCheckFill/>
              <h4>Tailwindcss</h4>
              <small>Master</small>
            </article>
            <article className='experience__detail'>
              <BsPatchCheckFill/>
              <h4>React</h4>
              <small>Intermidat</small>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__detail'>
              <BsPatchCheckFill/>
              <h4>PHP</h4>
              <small>Master</small>
            </article>
            <article className='experience__detail'>
              <BsPatchCheckFill/>
              <h4>Laravel</h4>
              <small>Master</small>
            </article>
            <article className='experience__detail'>
              <BsPatchCheckFill/>
              <h4>Python</h4>
              <small>Master</small>
            </article>
            <article className='experience__detail'>
              <BsPatchCheckFill/>
              <h4>Django</h4>
              <small>Master</small>
            </article>
            <article className='experience__detail'>
              <BsPatchCheckFill/>
              <h4>MYSQL</h4>
              <small>Intermidat</small>
            </article>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience