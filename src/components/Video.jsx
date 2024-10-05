import React from 'react';

const Video = ({ src, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <video controls width="600">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
