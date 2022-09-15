import React from 'react'
import './card.css'


const Card = ({title, img, github }) => {
    
  return (        
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src={img} alt={title}/>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>{title}</p>
                    <h3>
                        <a href='/'><i className="fa-solid fa-link"></i></a>
                        <a href={github}><i className="fa-brands fa-square-github"></i></a>
                    </h3>
                </div>
            </div>
        </div>

  )
}

export default Card