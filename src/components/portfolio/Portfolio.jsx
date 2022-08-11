import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My React Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="first image" />
          </div>
          <h3>Title of Portfolio item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className="btn">Github</a>
            <a href="https://github.com/" target='_blank' className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="first image" />
          </div>
          <h3>Title of Portfolio item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className="btn">Github</a>
            <a href="https://github.com/" target='_blank' className="btn btn-primary">Live Demo</a>
          </div>
        </article><article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="first image" />
          </div>
          <h3>Title of Portfolio item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className="btn">Github</a>
            <a href="https://github.com/" target='_blank' className="btn btn-primary">Live Demo</a>
          </div>
        </article><article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="first image" />
          </div>
          <h3>Title of Portfolio item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className="btn">Github</a>
            <a href="https://github.com/" target='_blank' className="btn btn-primary">Live Demo</a>
          </div>
        </article><article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="first image" />
          </div>
          <h3>Title of Portfolio item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className="btn">Github</a>
            <a href="https://github.com/" target='_blank' className="btn btn-primary">Live Demo</a>
          </div>
        </article><article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="first image" />
          </div>
          <h3>Title of Portfolio item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className="btn">Github</a>
            <a href="https://github.com/" target='_blank' className="btn btn-primary">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio