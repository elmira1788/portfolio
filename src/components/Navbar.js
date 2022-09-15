import React, { useState } from 'react'
import './navbar.css'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import HA from '../images/HA (2).png'


const Navbar = () => {
    const [showLinks, setShowLinks ] = useState(false)
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <Link smooth={true} to='home' ><img src={HA} alt='hannan-azari' width='70px' height='70px' /></Link>
            

        </div>
        <div className='rightSide'>
            <div className='links' id={showLinks ? 'hidden' : ''}>
            <Link smooth={true} to='about'>About</Link>
            <Link smooth={true} to='project'>Projects</Link>
            <Link smooth={true} to='skills'>Skills</Link>
            <Link smooth={true} to='contact'>Contact</Link>
            </div>
            <button onClick={()=>{setShowLinks(!showLinks)}}>{!showLinks ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-times"></i> }</button>
        </div>
        
    </div>
   
  )
}

export default Navbar