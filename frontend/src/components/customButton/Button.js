import React from 'react';
import './button.css';

const Button = ({ children, ...buttonProps }) => {
  return (
    <button className='button' {...buttonProps}>
      <span>{children} </span>
    </button>
  );
};

export default Button;
