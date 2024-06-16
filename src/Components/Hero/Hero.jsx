import React from 'react'
import './hero.css'
import darkarrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure to help you produce fresh O<sub>2</sub></h1>
            <p>Our platform is designed to empower the public with the data and techniques to calculate the amount of O<sub>2</sub> that can be produced
                by our humble initiave. You're one simple calculation away from finding how many trees you need to plant to make this planet more sustainable.
            </p>
            <Link to='campus' smooth={true} offset={-260} duration={500}><button className='btn'>Explore more <img src={darkarrow} alt="" /></button></Link>
        </div>
    </div>
  )
}

export default Hero