import React from 'react';
import ReactPlayer from 'react-player';
import './wheelVideo.css';

const WheelVideo = ({ youtubeURL }) => {
  return (
    <div className='review-video-container'>
      <div className='review-video'>
        <h2>REVIEW VIDEO</h2>
        <ReactPlayer
          url={youtubeURL}
          muted={false}
          controls={true}
          volume={0.3}
          width='100%'
          height='100%'
        />
      </div>
    </div>
  );
};

export default WheelVideo;
