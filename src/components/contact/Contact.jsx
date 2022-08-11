import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  emailjs.sendForm('service_h3jqd8w', 'template_wh9yupn', form.current, 'BHQAjTBrWJP8MGrWF')
      e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMarkEmailUnread className='option__icon'/>
            <h3>Email</h3>
            <h5>hussanbayan230@gmail.com</h5>
            <a href="mailto:hussainbayan614@gmail.com" target="_blank">send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='option__icon'/>
            <h3>Messanger</h3>
            <h5>Hussain Hakimi</h5>
            <a href="https://m.me/mohammadhussain.hakimi.9" target="_blank">send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='option__icon'/>
            <h3>WhatsApp</h3>
            <h5>+93778782445</h5>
            <a href="https://api.whatsapp.com/send?phone=+93778782445" className='tag' target="_blank">send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact