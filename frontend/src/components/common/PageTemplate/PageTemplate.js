import React from 'react';
import ReactTooltip from 'react-tooltip'
import Sidebar from 'components/base/Sidebar';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import {
  FaAngleUp,
} from 'react-icons/fa';

const cx = classNames.bind(styles);

const PageTemplate = ({ children }) => {
  return (
    <div className={cx('page-wrap')}>
      <div className={cx('page-template')}>
        <Sidebar />
        {children}
      </div>
      <button className="top-button" onClick={()=>{window.scrollTo(0, 0)}} data-tip="맨 위로">
        <FaAngleUp />
      </button>
      <ReactTooltip/>
    </div>
  );
};

export default PageTemplate;
