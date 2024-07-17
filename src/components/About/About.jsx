import React from 'react'
import './About.css'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoFolderSharp } from "react-icons/io5";

import ME from '../../assets/adil3.jpg'



const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
            </article>


            <article className="about__card">
            <FiUsers
            className='about__icon'/>
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
            </article>


            <article className="about__card">
            <IoFolderSharp className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ completed Projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci cum quae iusto quisquam saepe nulla, modi ipsum ipsam maxime veritatis quibusdam tempora, itaque repudiandae nesciunt. Quis officia consequatur numquam id!
          m, nemo ipsam architecto adipisci vero neque illo laboriosam pariatur eligendi vel nihil at delectus dignissimos sit reiciendis totam earum maxime?</p>
        </div>
      </div>
    </section>
  )
}

export default About
