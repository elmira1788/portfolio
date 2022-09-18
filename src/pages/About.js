import React from 'react'
import './about.css'
import { Link } from 'react-scroll'


const About = () => {
  
  return (
    <div name='about' className='about-container' >
      <h1>About Me</h1>
      <div  className='about'>
        
        <h2>Talented Front-End Web Developer with a desire to learn and grow in a collaborative team environment.</h2>
        <p>I am a creative Structural Engineer and Construction Project Manager with extensive experience in delivering complex projects. Besides, I have always wanted to be a Software Engineer. So, I decided to start my career by enrolling Front-end Web Development in General Assembly. I am passionate about building excellent applications that improve the lives of those around me. Specialising in building and (occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive single-page web applications.</p>
        

      </div>
      <Link smooth={true} to='project'><span className='about-btn'>View Work</span><i className="fa-solid fa-circle-right"></i></Link>
    </div>
  )
}

export default About