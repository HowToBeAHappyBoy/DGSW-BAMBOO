import React from 'react';
import styles from './Story.scss';
import classNames from 'classnames/bind';
import { PANDA } from 'config/config.json';
import ImageViewer from 'components/image/ImageViewer';

const cx = classNames.bind(styles);

const Story = ({ story, width }) => {
  const writeDate = new Date(story.writeDate);
  const allowDate = new Date(story.allowDate);
  return (
    <div className={cx('story')} style={{ maxWidth: width }}>
      <div className={cx('story-header')}>
        <h1 className={cx('header-title')}>{story.idx}번째 이야기</h1>
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
            <a href={story.writerUrl} target="_blank" rel="noopener noreferrer">
              <p className={cx('profile-name', 'profile-name-underline')}>
                {story.writerName}님 제보
              </p>
            </a>
          ) : (
            <p className={cx('profile-name')}>익명의 판다 제보</p>
          )}
        </div>
        <div className={cx('footer-date')}>
          <p className={cx('write-date')}>{writeDate.toLocaleString()} 제보</p>
          <p className={cx('allow-date')}>{allowDate.toLocaleString()} 승인</p>
        </div>
      </div>
    </div>
  );
};

export default Story;
