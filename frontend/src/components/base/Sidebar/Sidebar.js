import React from 'react';
import styles from './Sidebar.scss';
import classNames from 'classnames/bind';
import {
  FaRegNewspaper,
  FaPencilAlt,
  FaGoogle,
  FaSchool,
  FaCloudDownloadAlt,
  FaFacebook,
} from 'react-icons/fa';
import { MdBugReport, MdSettings } from 'react-icons/md';
import { NavLink, Link } from 'react-router-dom';
import LOGO from 'static/media/logo.jpg';

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <>
      <nav className={cx('side-bar-container')}>
        <div className={cx('side-bar')}>
          <div className={cx('side-bar-logo')}>
            <Link to="/"><img src={LOGO} alt="logo" className={cx('logo-img')} /></Link>
          </div>
          <div className={cx('side-bar-items')}>
            <ul className={cx('side-bar-list')}>
              <h4 className={cx('list-title')}>Menu</h4>
              <NavLink exact to="/" activeClassName={cx('active')}>
                <li className={cx('list-menu')}>
                  <FaRegNewspaper size={25} className={cx('menu-icon')} />
                  <p className={cx('menu-name')}>뉴스피드</p>
                </li>
              </NavLink>
              <NavLink exact to="/edit" activeClassName={cx('active')}>
                <li className={cx('list-menu')}>
                  <FaPencilAlt size={25} className={cx('menu-icon')} />
                  <p className={cx('menu-name')}>제보하기</p>
                </li>
              </NavLink>
              <NavLink exact to="/admin" activeClassName={cx('active')}>
                <li className={cx('list-menu')}>
                  <MdSettings size={25} className={cx('menu-icon')} />
                  <p className={cx('menu-name')}>관리자</p>
                </li>
              </NavLink>
            </ul>
            <ul className={cx('side-bar-list')}>
              <h4 className={cx('list-title')}>ShortCuts</h4>
              <a
                href="https://classroom.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className={cx('list-menu')}>
                  <FaGoogle size={25} className={cx('menu-icon')} />
                  <p className={cx('menu-name')}>구글 클래스룸</p>
                </li>
              </a>
              <a
                href="http://www.dgsw.hs.kr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className={cx('list-menu')}>
                  <FaSchool size={25} className={cx('menu-icon')} />
                  <p className={cx('menu-name')}>학교 홈페이지</p>
                </li>
              </a>
              <a
                href="http://10.64.160.114:5000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className={cx('list-menu')}>
                  <FaCloudDownloadAlt size={25} className={cx('menu-icon')} />
                  <p className={cx('menu-name')}>학교 NAS</p>
                </li>
              </a>
              <a
                href="https://www.facebook.com/dgsw.hs.kr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className={cx('list-menu')}>
                  <FaFacebook size={25} className={cx('menu-icon')} />
                  <p className={cx('menu-name')}>학교 페이스북</p>
                </li>
              </a>
              <a
                href="https://github.com/seojeenyeok/DGSW-BAMBOO/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className={cx('list-menu')}>
                  <MdBugReport size={25} className={cx('menu-icon')} />
                  <p className={cx('menu-name')}>버그 제보</p>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
      <nav className={cx('side-bar-mobile')}>
        <img className={cx('mobile-logo')} src={LOGO} alt="logo" />
        <ul className={cx('mobile-list')}>
          <NavLink exact to="/">
            <li>뉴스피드</li>
          </NavLink>
          <NavLink to="/edit">
            <li>제보하기</li>
          </NavLink>
          <NavLink to="/admin">
            <li>어드민</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
