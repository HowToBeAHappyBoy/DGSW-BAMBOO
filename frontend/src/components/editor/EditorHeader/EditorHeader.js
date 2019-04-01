import React from 'react';
import styles from './EditorHeader.scss';
import classNames from 'classnames/bind';
import { MdKeyboardBackspace, MdSend } from 'react-icons/md';
import { FaFacebookSquare } from 'react-icons/fa';
import { GoX } from 'react-icons/go';
import { withRouter } from 'react-router-dom';
import ToggleButton from 'react-toggle-button';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const cx = classNames.bind(styles);

const EditorHeader = ({
  history,
  onLogin,
  onLogout,
  onTypeChange,
  onSubmit,
  data,
}) => {
  return (
    <div className={cx('editor-header')}>
      <div className={cx('back')}>
        <MdKeyboardBackspace className={cx('icon')} onClick={history.goBack} />
      </div>
      <div className={cx('buttons')}>
        <div className={cx('toggle')}>
          <span>실명 제보</span>
          <ToggleButton
            value={data.type}
            onToggle={() => {
              onTypeChange(data.type);
            }}
          />
        </div>
        {data.isLogin ? (
          <div className={cx('profile')}>
            <img
              className={cx('profile-img')}
              src={data.writerPicture}
              alt="제보자 사진"
            />
            <p className={cx('profile-name')}>{data.writerName}</p>
            <GoX className={cx('profile-logout')} onClick={onLogout} />
          </div>
        ) : (
          <FacebookLogin
            appId="837532103265015"
            fields="name,picture,link"
            scope="user_link"
            callback={response => {
              onLogin(response);
            }}
            render={renderProps => (
              <button
                className={cx('login-button')}
                onClick={renderProps.onClick}
              >
                <FaFacebookSquare />
                <span>Facebook</span>
              </button>
            )}
          />
        )}
        <button className={cx('send-button')} onClick={onSubmit}>
          <MdSend />
          <span>제보하기</span>
        </button>
      </div>
    </div>
  );
};

export default withRouter(EditorHeader);
