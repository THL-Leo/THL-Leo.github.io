import React from 'react'
import './about.css'
import CTA from './CTA'
import Socials from './Socials'
import Projects from './Projects'

const About = () => {
  return (
    
    <header>
      <div className="container header__container">
        <div className="header_content">
          <h2 className='header_intro'>Hello My name is</h2>
          <h1 className='header_name'>Leo Lee</h1>
          <div className="header_title">
            <div className="header_title_wrapper">
              <div className="title_item">Third Year College Student</div>
              <div className="title_item">Software Engineer</div>
              <div className="title_item">Web Developer</div>
            </div>
          </div>
          <p className="description">
            I am a third year college student at UC Santa Cruz currently exploring various fields such as Front End Development, Full Stack Development, App Development, and Game Development.
          </p>
         
        </div>
        <CTA />
        <div>
          <p>
          Temporary
          </p>
        </div>
        <div>
        <Projects />
        </div>
        
        {/* <Socials /> */}
      </div>
    </header>
    
  )
}

export default About