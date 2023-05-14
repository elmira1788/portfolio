import React from 'react'
import './social.css'
import CV from '../asset/CV.pdf'

const Home = () => {
  return (
    <div className='social'>
      <div className='box'>
        <a href='https://linkedin.com/in/elmiraalimohammadi' className='box1'>
          <h3>Linkedin</h3>
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href='https://github.com/elmira1788' className='box2'>
          <h3>Github</h3>
          <i className="fa-brands fa-github"></i>
        </a>
        <a href='mailto:elmiraalimohammadi@gmail.com' className='box3'>
          <h3>Email</h3>
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href={CV} className='box4'>
          <h3>Resume</h3>
          <i className="fa-solid fa-file"></i>
        </a>
      </div>
      <div className='hidden'>
        <a href='https://linkedin.com/in/elmiraalimohammadi' className='box1'>
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href='https://github.com/elmira1788' className='box2'>
          <i className="fa-brands fa-github"></i>
        </a>
        <a href='mailto:elmiraalimohammadi@gmail.com' className='box3'>
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href={CV} className='box4'>
          <i className="fa-solid fa-file"></i>
        </a>
      </div>
    </div>
  )
}

export default Home