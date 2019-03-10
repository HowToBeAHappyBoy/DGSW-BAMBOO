import React from 'react';
import styles from './Sidebar.scss';
import classNames from 'classnames/bind';
import { FaRegNewspaper, FaPencilAlt, FaGoogle, FaSchool, FaCloudDownloadAlt, FaFacebook } from "react-icons/fa";
import { MdBugReport } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <div className={cx('side-bar')}>
            <div className={cx('side-bar-items')}>
                <img src="https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/28377543_1885163511795293_5158548161583601324_n.jpg?_nc_cat=104&_nc_ht=scontent-icn1-1.xx&oh=bd01fa53b90f854e6a651cb62aa150f3&oe=5CE14532" alt="logo"/>
                <div className={cx('menu')}>
                    <p className={cx('menu-name')}>
                        Menu
                    </p>
                    <NavLink exact to="/" activeClassName={cx('active')}>
                        <div className={cx('menu-content')}>
                            <FaRegNewspaper size={25} className={cx('menu-icon')}/>
                                <p className={cx('menu-item')}>
                                    뉴스피드
                                </p>
                        </div>
                    </NavLink>
                    <NavLink exact to="/report" activeClassName={cx('active')}>
                        <div className={cx('menu-content')}>
                            <FaPencilAlt size={25} className={cx('menu-icon')}/>
                                <p className={cx('menu-item')}>
                                    제보하기
                                </p>
                        </div>
                    </NavLink>
                </div>
                <div className={cx('menu')}>
                    <p className={cx('menu-name')}>
                        ShortCuts
                    </p>
                    <a href="https://classroom.google.com" target="_blank" rel="noopener noreferrer">
                        <div className={cx('menu-content')}>
                            <FaGoogle size={25} className={cx('menu-icon')}/>
                            <p className={cx('menu-item')}>구글 클래스룸</p>
                        </div>
                    </a>
                    <a href="http://www.dgsw.hs.kr" target="_blank" rel="noopener noreferrer">
                        <div className={cx('menu-content')}>
                            <FaSchool size={25} className={cx('menu-icon')}/>
                            <p className={cx('menu-item')}>학교 홈페이지</p>
                        </div>
                    </a>
                    <a href="http://10.64.160.114:5000" target="_blank" rel="noopener noreferrer">
                        <div className={cx('menu-content')}>
                            <FaCloudDownloadAlt size={25} className={cx('menu-icon')}/>
                            <p className={cx('menu-item')}>학교 나스</p>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/dgsw.hs.kr" target="_blank" rel="noopener noreferrer">
                        <div className={cx('menu-content')}>
                            <FaFacebook size={25} className={cx('menu-icon')}/>
                            <p className={cx('menu-item')}>학교 페이스북</p>
                        </div>
                    </a>
                    <a href="https://github.com/seojeenyeok/DGSW-BAMBOO/issues" target="_blank" rel="noopener noreferrer">
                        <div className={cx('menu-content')}>
                            <MdBugReport size={25} className={cx('menu-icon')}/>
                                <p className={cx('menu-item')}>
                                    버그제보
                                </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
