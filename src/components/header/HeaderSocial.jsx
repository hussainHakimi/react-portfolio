import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {AiFillTwitterCircle} from 'react-icons/ai'

const headerSocial = () => {
  return (
    <div className='header-social'>
      <a href="https://linkedin.com" target="_blank"> <BsLinkedin/></a>
      <a href="https://github.com" target="_blank"><ImGithub/></a>
      <a href="https://twitter.com" target="_blank"><AiFillTwitterCircle/></a>

    </div>
  )
}

export default headerSocial