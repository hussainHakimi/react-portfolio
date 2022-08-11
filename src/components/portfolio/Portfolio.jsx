import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image:IMG1,
    title: 'Title for the First Image',
    github: 'https://github.com',
    demo:''
  },
  {
    id:2,
    image:IMG2,
    title: 'Title for the Second Image',
    github: 'https://github.com',
    demo:''
  },
  {
    id:3,
    image:IMG3,
    title: 'Title for the Third Image',
    github: 'https://github.com',
    demo:''
  },
  {
    id:4,
    image:IMG4,
    title: 'Title for the Fourth Image',
    github: 'https://github.com',
    demo:''
  },
  {
    id:5,
    image:IMG5,
    title: 'Title for the Fivth Image',
    github: 'https://github.com',
    demo:''
  },
  {
    id:6,
    image:IMG6,
    title: 'Title for the Sixth Image',
    github: 'https://github.com',
    demo:''
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My React Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target='_blank' className="btn">Github</a>
                <a href={demo} target='_blank' className="btn btn-primary">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio