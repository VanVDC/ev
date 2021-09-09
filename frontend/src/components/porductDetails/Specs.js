import React from 'react';
import './specs.css';
const Specs = ({ weight, speed, range, motorPower, battery }) => {
  return (
    <div className='spec-container'>
      <div className='spec-list'>
        <span md={2}>
          <h4>Weight</h4>
          {weight} Ibs
        </span>
        <span md={2}>
          <h4>Speed</h4>
          {speed} MPH
        </span>
        <span md={2}>
          <h4>Range</h4>
          {range} miles
        </span>
        <span md={2}>
          <h4>Motor</h4>
          {motorPower} W
        </span>
        <span md={2}>
          <h4>Battery</h4>
          {battery} Wh
        </span>
      </div>
    </div>
  );
};

export default Specs;
