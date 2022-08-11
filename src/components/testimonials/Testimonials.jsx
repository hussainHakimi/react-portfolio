import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const data =[
  {
    avatar: AVTR1,
    name: 'Arash Haqdost',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iusto tempore quisquam aperiam eligendi, minima soluta dolorum illo necessitatibus rerum molestiae. Omnis et eum rerum consectetur nihil hic modi! Incidunt?'
  },
  {
    avatar: AVTR2,
    name: 'Mahdi Jafari',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iusto tempore quisquam aperiam eligendi, minima soluta dolorum illo necessitatibus rerum molestiae. Omnis et eum rerum consectetur nihil hic modi! Incidunt?'
  },
  {
    avatar: AVTR3,
    name: 'Hussain Hakimi',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iusto tempore quisquam aperiam eligendi, minima soluta dolorum illo necessitatibus rerum molestiae. Omnis et eum rerum consectetur nihil hic modi! Incidunt?'
  },
  {
    avatar: AVTR4,
    name: 'Nematullah Hussaini',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iusto tempore quisquam aperiam eligendi, minima soluta dolorum illo necessitatibus rerum molestiae. Omnis et eum rerum consectetur nihil hic modi! Incidunt?'
  },

]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review Form Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__contianer">
        {
        data.map(({avatar, name, review}, index) =>{

          return(
            <SwiperSlide className='testimonial' key={index}
              // install Swiper modules
              modules={[Pagination, Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              >
              <div className="client__avator">
                <img src={avatar} alt="first avatar" />
              </div>
                <h4 className='client__name'>{name}</h4>
                <small className="client__review">
                  {review}
                </small>
            </SwiperSlide>
          )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials