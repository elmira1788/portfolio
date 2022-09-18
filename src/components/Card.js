import React from 'react'
import './card.css'


const Card = ({title, img, github, demo, description, skills }) => {
    
  return (        
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src={img} alt={title}/>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <h5>{skills}</h5>
                    <div>
                        <a href={demo}><i className="fa-solid fa-link"></i></a>
                        <a href={github}><i className="fa-brands fa-square-github"></i></a>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Card