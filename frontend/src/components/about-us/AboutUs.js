import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <div className='about-us-header'>
        <div className='wheel-images'>
          <img src='/images/jump.png' alt='onewheel' />
        </div>
        <div className='about-us-text'>
          <p>
            For over 5 years, EV-Wheels has been built on the vision of
            uncompromising quality and speed.
          </p>
        </div>
      </div>
      <div className='about-us-cards'>
        <div className='leadership-card'>
          <p>
            Today, our standards of quality are just as uncompromising as when
            the brand was founded. Every wheels are tested by our own team.
            Through unparalleled quality control, our wheels are made to last.
            Over the years, we’ve built long-standing relationships with our
            partners, each one rooted in trust and a commitment to excellence.
          </p>
          <div className='leadership-image'>
            <img src='/images/eucbw.jpg' alt='onewheel' />
          </div>
        </div>
        <div className='quality-card'>
          <div className='quality-card-image'>
            <img src='/images/onewheel.jpg' alt='onewheel' />
          </div>

          <p>
            We are passionate about delivering the best buying experience. By
            ensuring you have the best experience, we meet your needs by
            learning your preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
