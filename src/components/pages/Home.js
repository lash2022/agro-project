import React from 'react'
import HeroSection from '../HeroSection'
import '../../App.css'
import Card from '../Card'
import Slider from '../Slider'
import Species from '../Species'
import Footer from '../Footer'

const Home = () => {
  return (
    
    <>
    <HeroSection />
    <Species />
    <h1 className='projs-title'>Our Supported Programs</h1>
    <Card />
    <h1 className='brands-title'>BRANDS</h1>
    <Slider />
    <Footer/>
    
    </>
    
    
  )
}

export default Home