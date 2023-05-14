import React from 'react'
import './skill.css'
import HTML from '../images/html.png'
import CSS from '../images/css.png'
import REACT from '../images/react.png'
import NODE from '../images/node.png'
import REDUX from '../images/redux.png'
import JS from '../images/JS.png'
import BOOTSTRAP from '../images/bootstrap.png'
import MONGODB from '../images/mongodb.png'
import POSTGRES from '../images/postgresql.png'
import POSTMAN from '../images/postman.png'

const Resume = () => {
  const image = [
    {
      name: 'HTML',
      img: HTML
    },
    {
      name: 'CSS',
      img: CSS
    },
    {
      name: 'REACT',
      img: REACT
    },
    {
      name: 'JAVASCRIPT',
      img: JS
    },
    {
      name: 'POSTGRES',
      img: POSTGRES
    },
    {
      name: 'REDUX',
      img: REDUX
    },
    {
      name: 'NODE',
      img: NODE
    },
    {
      name: 'BOOTSTRAP',
      img: BOOTSTRAP
    },
    {
      name: 'POSTMAN',
      img: POSTMAN
    },
    {
      name: 'MONGO DB',
      img: MONGODB
    }
  ]
  
  
   
  return (
    <div className='skill-container' name='skills'>
      <p className='skill-header'>Skills</p>
      <div className='skill-image'>
            {image.map((item) => {
              return (
              <div key={item.name} className='image'>
                <img src={item.img} alt={item.name} width='70px' height='70px' />
                <p>{item.name}</p>
              </div>
            )})}
      </div>
    </div>
  )
}

export default Resume