import React from 'react'
import './card.css'


const Card = ({title, img, github, demo, description, skills }) => {
    
  return (        
        // <div className="card">
        //     <div className="face face1">
        //         <div className="content">
        //             <img src={img} alt={title}/>
        //         </div>
        //     </div>
        //     <div className="face face2">
        //         <div className="content">
        //             <h3>{title}</h3>
        //             <p>{description}</p>
        //             <h5>{skills}</h5>
        //             <div>
        //                 <a href={demo}><i className="fa-solid fa-link"></i></a>
        //                 <a href={github}><i className="fa-brands fa-square-github"></i></a>
        //             </div>
        //         </div>
        //     </div>
        // </div>


        <section>
        <div class="row">
            <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="card">
                <div class="cover item-a" style={{ backgroundImage: `url(${img})` }}>

                        <h3>{title}</h3>
                        {/* <span class="price">$79</span> */}
                        <div class="card-back">
                            <p>{description}</p>
                            <h5>{skills}</h5>
                            <div className='div'>
                            <a href={github}>github <i className="fa-brands fa-square-github"></i></a>
                            <a href={demo}>demo <i className="fa-solid fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
  )
}

export default Card