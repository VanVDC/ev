import React from 'react';
import './footer.css';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = () => {
  return (
    <footer>
      <div className='main-footer'>
        <div className='footer-logo'>EV-Wheels</div>
        <div className='footer-contact'>
          <a href='/aboutus'>Privacy Policy</a>
          <a href='/aboutus'>FAQ</a>
          <a href='/aboutus'>Terms & Conditions</a>
          <a href='/support'>Contact</a>
        </div>

        <div className='footer-social'>
          <span>
            <a href='https://www.facebook.com/'>
              <i className='fab fa-facebook-f'></i>
            </a>
          </span>{' '}
          <span>
            <a href='https://twitter.com/'>
              <i className='fab fa-twitter-square'></i>
            </a>
          </span>{' '}
          <span>
            <a href='https://www.instagram.com/'>
              <i className='fab fa-instagram'></i>
            </a>
          </span>
        </div>
        <br />
        <div className='footer-copyright'>
          {' '}
          &copy; {currentYear} EV-Wheels. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
