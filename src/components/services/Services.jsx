import React from 'react'
import './services.css'
import {BiCheckDouble} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Our Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UX/UI Design</h3>
          </div>
          <ul>
            <li>
              <BiCheckDouble className='service__icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className='service__icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className='service__icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className='service__icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className='service__icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>

        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul>
            <li>
              <BiCheckDouble className='service__icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className='service__icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className='service__icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className='service__icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className='service__icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className='service__icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>

        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul>
            <li>
              <BiCheckDouble className='service__icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className='service__icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className='service__icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className='service__icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
              <BiCheckDouble className='service__icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
            </li>
          </ul>

        </article>
      </div>
    </section>
  )
}

export default Services