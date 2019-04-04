import React from 'react';
import './ErrorComponent.scss';
import Error from 'static/media/error_panda.jpg';

const ErrorComponent = ({ onRefresh }) => {
  return (
    <div className="error-container">
      <div className="error-contents">
        <img src={Error} className="panda-image" alt="panda" />
        <p>이게 오류가 나네..</p>
        <button onClick={onRefresh}>
          <span>새로 고침 해주세요</span>
        </button>
      </div>
    </div>
  );
};

export default ErrorComponent;
