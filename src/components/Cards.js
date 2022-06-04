import React from 'react'
import './Cards.css'
const Cards = ({title,imageUrl,body}) => {
  return (
    <div className='card-container'>
        <div className="image-container">
            <img src={imageUrl} alt="products" />
        </div>
        <div className="card-content">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
        </div>
        <div className="card-btn">
            <button>
                <a href="/">
                    View more
                </a>
            </button>
        </div>
       
    </div>
  )
}

export default Cards