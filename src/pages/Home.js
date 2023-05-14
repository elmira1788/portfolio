import React from 'react'
import './home.css'
import WEB from '../images/femaleweb.png'

const Home = () => {
  return (
    <div name='home' className='home-container'> 
        
        <div  className='home'>
            
            <p>Hi, my name is</p>
            <h1>Elmira Alimohammadi</h1>
            <h2>I'm a Software Engineer</h2>
            <p>Welcome to my portfolio website!</p>
        </div>
        <div className='home-img'>
            <img src={WEB} alt='web' width='400px' height='325px'/>
        </div>
    </div>
  )
}

export default Home