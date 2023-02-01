import React from 'react'
import './home.css'
import WEB from '../images/web.png'

const Home = () => {
  return (
    <div name='home' className='home-container'> 
        
        <div  className='home'>
            
            <p>Hi, my name is</p>
            <h1>Hannan Azari</h1>
            <h2>I'm a Full Stack Developer</h2>
            <p>Welcome to my portfolio website!</p>
        </div>
        <div className='home-img'>
            <img src={WEB} alt='web' width='400px' height='325px'/>
        </div>
    </div>
  )
}

export default Home