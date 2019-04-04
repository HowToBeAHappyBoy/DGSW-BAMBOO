import React from 'react';
import './NotFound.scss';
import { withRouter } from 'react-router-dom';

const NotFound = ({ history }) => {
  const handleRedirect = () => {
    history.push('/');
  };
  return (
    <div className="notfound">
      <div className="notfound-contents">
        <h1>404</h1>
        <p>Not Found</p>
        <button onClick={handleRedirect}>
          <span>홈으로</span>
        </button>
      </div>
    </div>
  );
};

export default withRouter(NotFound);
