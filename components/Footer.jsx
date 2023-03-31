import React from 'react'
import { AiOutlineWhatsApp,AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 JSM Headphones</p>
      <span >© Sebastian Diaz R. All rights reserved.</span>
      <a target='_blank'  href="https://sebastiandr-full-stack.netlify.app/">Portafolio</a>
      <div className='icons'>
        <a target='_blank'  href="https://www.linkedin.com/in/sebasti%C3%A1n-e-d%C3%ADaz-ram%C3%ADrez-3a4960244/"><AiFillLinkedin/></a>
        <a target='_blank'  href="https://wa.me/584120169581"><AiOutlineWhatsApp/></a>
        <a  target='_blank' href="https://github.com/SebasWebCool"><AiFillGithub/></a>
        
        
        
      </div>
    </div>
  )
}

export default Footer