import React from 'react'
import './about.css'
import { Link } from 'react-scroll'


const About = () => {
  
  return (
    <div name='about' className='about-container' >
      <h1>About Me</h1>
      <div  className='about'>
        
        <h2>Talented Full Stack Web Developer with a desire to learn and grow in a collaborative team environment.</h2>
        <p>I am a creative Structural Engineer and Construction Project Manager with extensive experience in delivering complex projects. However, this is not only thing I have always wanted. <br/>
          I have always been kind of a person who loves to put himself in new challenges. So, I decided to start learning web development to increase my technical and problem solving skills. The main reason for me to accept this challenge is that I will have chances to explore new tools and tricks which I never knew before. Accepting a challenge is kind of push up for me and I love such push ups to keep myself warm and ready for any new challenge. <br/>
          I am passionate about building excellent applications that improve the lives of those around me. Specialising in building and (occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive single-page web applications.</p>
        

      </div>
      <Link smooth={true} to='project'><span className='about-btn'>View Work</span><i className="fa-solid fa-circle-right"></i></Link>
    </div>
  )
}

export default About