import React from 'react'
import './about.css'
import { Link } from 'react-scroll'


const About = () => {
  
  return (
    <div name='about' className='about-container' >
      <h1>About Me</h1>
      <div  className='about'>
        
        <h2>Talented Software Engineer with a desire to learn and grow in a collaborative team environment.</h2>
        <p>I am passionate about using my abilities to develop software solutions that positively impact people's lives.<br/>My previous experience as an accountant has honed my attention to detail, critical thinking, and methodical problem-solving skills, as well as my ability to communicate complex information clearly and concisely with clients. These abilities are highly relevant to software engineering, where effective communication is critical for successful project management and collaboration.<br/> I am committed to ongoing learning and self-improvement, and I am eager to contribute my knowledge and skills to a team working on significant projects.</p>
        

      </div>
      <Link smooth={true} to='project'><span className='about-btn'>View Work</span><i className="fa-solid fa-circle-right"></i></Link>
    </div>
  )
}

export default About