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
        <p>In non irure fugiat incididunt eiusmod minim in sit duis. Reprehenderit anim sint elit cupidatat sunt irure est pariatur et consectetur nostrud excepteur nulla. Ex quis deserunt dolor ullamco dolore. Anim tempor culpa duis adipisicing. Irure proident quis tempor commodo magna dolore.</p>
        <p>Id sunt deserunt ea ad quis magna minim culpa aute sunt aliqua quis aute. Sunt laboris eu laborum dolore officia dolor. Exercitation anim adipisicing reprehenderit consequat et cillum cupidatat adipisicing anim laboris nisi ipsum culpa velit. In irure dolore incididunt enim ullamco consequat. Irure sint aliquip aliquip ipsum proident sint nostrud ipsum occaecat veniam excepteur.</p>
        <p>Proident sunt fugiat proident irure enim aute. Amet minim mollit nisi excepteur Lorem culpa magna. Id voluptate magna deserunt ex mollit magna aliquip mollit aliquip veniam.</p>
      </div>
    </div>
  );
}

export default About;
