import React from 'react';
import styles from './Report.scss';
import classNames from 'classnames/bind';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import styled from 'styled-components';
import {
    PANDA
} from 'config/config.json';

const cx = classNames.bind(styles);

const Report = () => {
    const [writer, setWriter] = React.useState({
        "writerName": "익명의 판다",
        "writerPicture": PANDA,
        "writerUrl":""
    });

    const [call, setCall] = React.useState(false);
    
    const handleLogin = (response) => {
        setWriter({
            "writerName": response.name,
            "writerPicture": response.picture.data.url,
            "writerUrl": response.link
        });
        setCall(true);
    }

    return (
        <div className={cx('report-container')}>
            <div className={cx('report-content')}>
                <div className={cx('report-header')}>
                    <h1 className={cx('header-title')}>제보하기</h1>
                </div>
                <div className={cx('report-body')}>
                    <textarea className={cx('body-textarea')}>

                    </textarea>
                </div>
                <div className={cx('report-footer')}>
                    <div className={cx('footer-buttons')}>
                        {
                            call === true ?
                                <div className={cx('footer-profile')}>
                                    <img src={writer.writerPicture} alt="user_picture"/>
                                    <p className={cx('profile-name')}>{writer.writerName}</p>
                                </div>
                            :
                                <FacebookLogin
                                    appId="837532103265015"
                                    autoLoad
                                    fields="name,picture,link"
                                    scope="user_link"
                                    callback={(response)=>{handleLogin(response)}}
                                    render={renderProps => (
                                        <Button onClick={renderProps.onClick} color={"#3e3aff"}>
                                            <p className={cx('button-content')}>
                                                실명 제보 (facebook)
                                            </p>
                                        </Button>
                                    )}
                                />
                        }
                        <Button color={"#51cf66"}>
                            <p className={cx('button-content')}>
                                제보하기
                            </p>
                        </Button>
                    </div>
                    <p className={cx('footer-notice')}>페이스 북 로그인 시 실명으로 제보됩니다</p>
                </div>
            </div>
        </div>
    );
}

const Button = styled.button `
    cursor: pointer;
    margin-left: 20px;
    width: 200px;
    background-color: ${(props)=>props.color};
    user-select: none;
    border: none;
`
export default Report;
