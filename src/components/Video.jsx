import React from 'react';
import "./video.scss";

const Video = ({ src, title }) => {
  const videoSrc = `${import.meta.env.BASE_URL}/videos/${src}`;
  return (
    <div>
      <h2 className='video__title'>{title}</h2>
      <video className='video__content' controls width="600">
      <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
