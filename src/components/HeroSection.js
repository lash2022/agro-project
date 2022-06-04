import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>PLANT HEALT CARE</h1>
      <p>Want to keep your plants out of various diseases?</p>
      <p>We can help!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;