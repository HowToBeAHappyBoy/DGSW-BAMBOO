import React from 'react';
import './FullScreenLoader.scss';

const FullscreenLoader = () => {
  return (
    <div className="FullscreenLoader">
      <img
        src="https://loading.io/spinners/rolling/lg.curve-bars-loading-indicator.gif"
        alt="spiner"
        className="spiner"
      />
    </div>
  );
};

export default FullscreenLoader;
