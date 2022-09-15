import React from 'react'

const Footer = () => {
  return (
    <div style={{width:'100%', display:'flex', justifyContent:'center', padding:'30px'}}>
        <div style={{width:'30%', display:'flex', justifyContent:'center', flexDirection:'column', color: 'aliceblue'}}>
            <h2>website made by React</h2>
            <h3><i className="fa-regular fa-copyright"></i> 2022 Hannan Azari</h3>
        </div>
    </div>
    
  )
}

export default Footer