import React from 'react';
import styles from './Card.scss';
import classNames from 'classnames/bind';
import PANDA from 'static/media/panda.jpg';
import ImageViewer from 'components/image/ImageViewer';
import { FaFacebookF } from 'react-icons/fa';

const cx = classNames.bind(styles);

const Card = ({ story, width, type, onAllow, onReject }) => {
  const writeDate = new Date(story.writeDate);
  const allowDate = new Date(story.allowDate);
  return (
    <div className={cx('story')}>
      <div className={cx('story-header')}>
        <h1 className={cx('header-title')}>
          {type === 'allow' || type === 'preview'
            ? `${story.idx}번째 이야기`
            : `${writeDate.toLocaleString()}`}
        </h1>
        {type === 'allow' && (
          <a
            className={cx('header-facebook')}
            href={`https://www.facebook.com/hashtag/대소고_${
              story.idx
            }번째_이야기`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className={cx('facebook-logo')} />
          </a>
        )}
      </div>
      <div className={cx('story-body')}>
        <pre className={cx('body-content')}>{story.content}</pre>
        {story.imgs.length !== 0 && <ImageViewer images={story.imgs} />}
      </div>
      <div className={cx('story-footer')}>
        <div className={cx('footer-profile')}>
          <img
            src={story.type ? story.writerPicture : PANDA}
            alt="제보자 프로필 사진"
          />
          {story.type ? (
            story.writerUrl ? (
              <a
                href={story.writerUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className={cx('profile-name', 'profile-name-underline')}>
                  {story.writerName}님 제보
                </p>
              </a>
            ) : (
              <p className={cx('profile-name')}>{story.writerName} 님 제보</p>
            )
          ) : (
            <p className={cx('profile-name')}>익명의 판다 제보</p>
          )}
        </div>
        {(() => {
          switch (type) {
            case 'allow':
            case 'preview':
              return (
                <div className={cx('footer-date')}>
                  <p className={cx('write-date')}>
                    {writeDate.toLocaleString()} 제보
                  </p>
                  <p className={cx('allow-date')}>
                    {allowDate.toLocaleString()} 승인
                  </p>
                </div>
              );
            case 'wait':
              return (
                <div className={cx('footer-buttons')}>
                  <button
                    className={cx('button', 'allow')}
                    onClick={() => {
                      onAllow(story.idx);
                    }}
                  >
                    <span>승인</span>
                  </button>
                  <button
                    className={cx('button', 'reject')}
                    onClick={() => {
                      onReject(story.idx);
                    }}
                  >
                    <span>거절</span>
                  </button>
                </div>
              );
            default:
              break;
          }
        })()}
      </div>
    </div>
  );
};

export default Card;
