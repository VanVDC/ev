import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import './jumbo.css';

// const videoSource =
//   'https://ia601402.us.archive.org/35/items/bgvideo_20210608_0132/bgvideo.mp4';
// 5mb
const videoSource5 =
  'https://ia902304.us.archive.org/31/items/bgvideo5/bgvideo5.mp4';
//3.7mb
const videoSource3 =
  'https://ia601408.us.archive.org/27/items/bgvideo3.7/bgvideo3.7.mp4';

const Jumbo = () => {
  const screenWidth = window.innerWidth;
  let videoSource = null;
  if (screenWidth <= 350) {
    videoSource = videoSource3;
  } else {
    videoSource = videoSource5;
  }

  return (
    <div className='jumbo-container'>
      <div className='jumbo-bg'>
        <video
          className='myVideo'
          playsInline
          autoPlay
          loop
          fullscreen='true'
          muted
          id='my-video-id'
        >
          <source src={videoSource} type='video/mp4' />
        </video>

        <div className='jumbo-text'>
          <h1 className='jumbo-h1'>
            Welcome to <span className='jumboTitle'>EV-Wheels</span>
          </h1>
          <h4 className='jumbo-h4 '>
            Find the best personal transport devices on the Web!
          </h4>
          <div className='line'></div>

          <LinkContainer to='/store'>
            <a href='/store' className='enter-shop'>
              ENTER THE SHOP
            </a>
          </LinkContainer>
        </div>
      </div>
    </div>
  );
};

export default Jumbo;
