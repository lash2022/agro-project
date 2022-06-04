import React from 'react'
import "./Species.css"

const Image = ({imageUrl, text}) => {
  return (
    <>
    
    <div className="image--container">
        
        <img src={imageUrl} alt="species" />
        <p>{text}</p>
    </div>
    
    </>
  )
}

export default Image