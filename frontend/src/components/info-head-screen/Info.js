import React from 'react';
import './info.css';

const Info = () => {
  return (
    <div className='info-container'>
      <div className='info-section'>
        <div className='info-img'>
          <img src='/images/ks-black.png' alt='' />
        </div>
        <div className='info-text'>
          <h2 className='info-text-heading'>Why EV-Wheels?</h2>
          <p className='info-text-body'>
            Our Wheel is powerful, capable, and packed with everything you need
            to take you to point A to B.
          </p>
          <p>Always quality. Never slow.</p>
        </div>
        <div className='info-img'>
          <img src='/images/ks-white.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Info;
