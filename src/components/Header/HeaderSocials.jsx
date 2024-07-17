import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a rel="noreferrer" href="https://linkedin.com" target='_blank'><FaLinkedin/></a>
      <a rel="noreferrer" href="https://github.com" target='_blank'><FaGithub />
      </a>
      <a rel="noreferrer" href="https://facebook.com" target='_blank'><FaFacebook />
      </a>
    </div>
  )
}

export default HeaderSocials
