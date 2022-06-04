import React from 'react'
import Image from './Image'
import "./Species.css"
const Species = () => {
  return (
    <>
    <div className="container">
        <h1>What Species are you Interested in?</h1>
        <Image imageUrl = "images/circle-images/4533723.jpg" text={'Strawberry'}/>
        <Image imageUrl = "images/circle-images/potatoes-1585060__340.webp" text={'Potato'} />
        <Image imageUrl = "images/circle-images/walnut-nut-walnuts-nuts.jpg" text={'Walnut'}  />
        <Image imageUrl = "images/circle-images/y4VgfZ.jpg" text={'Watermelon'} />
    </div>
    </>
  )
}

export default Species  