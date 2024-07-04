import React, { useState } from 'react';
import './about.css';
import playicon from '../../assets/play-icon.png';

const About = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div className='about'>
      <div className="about-left">
        <div className={`video-container ${!playState ? 'background-image' : ''}`}>
          {!playState ? (
            <img
              src={playicon}
              alt="Play Icon"
              className='play-icon'
              onClick={() => setPlayState(true)}
            />
          ) : (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bGzCFNUtkdU"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded YouTube"
            ></iframe>
          )}
        </div>
      </div>
      <div className="about-right">
        <h3>About CleverO<sub>2</sub></h3>
        <h2>Nurturing Tomorrow's Environment Today</h2>
<p>CleverO2 is an innovative platform dedicated to providing detailed information on the carbon sequestration capabilities of various tree species. The idea was born out of my passion for ESG management. While analyzing data one day, we pondered the impact of planting an acre of a specific tree species on carbon sequestration and oxygen release. This thought led to the creation of a comprehensive repository.</p>
<p>Our database includes hundreds of tree species from around the world, detailing their carbon absorption and oxygen release rates. By calculating the number of trees that can be planted per acre, users can estimate the environmental impact of their reforestation efforts under optimal conditions. This information is invaluable for individuals, organizations, and policymakers looking to make informed decisions about tree planting and carbon offset projects.</p>
<p>The website was brought to life by two friends: a computer science engineer who designed and developed the platform, and a mechanical engineer and ESG Analyst who compiled the extensive database. CleverO2 aims to be a vital resource in the fight against climate change, helping users understand and leverage the power of afforestation to reduce carbon footprints and enhance sustainability. Explore our site to discover how different tree species can contribute to a healthier, more sustainable planet.</p>
        </div>
    </div>
  );
}

export default About;
