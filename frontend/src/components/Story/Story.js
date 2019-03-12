import React from 'react';
import styles from './Story.scss';
import classNames from 'classnames/bind';
import {
    PANDA
} from 'config/config.json'

const cx = classNames.bind(styles);

const Story = ({ story }) => {
    const writeDate = new Date(story.writeDate);
    return (
        <div className={cx('story')}>
           <div className={cx('story-header')}>
                <p className={cx('header-title')}>{story.idx}번째 이야기</p>
                <p className={cx('header-date')}>{writeDate.toLocaleString()} 제보</p>
           </div>
           <div className={cx('story-body')}>
                <p className={cx('body-content')}>{story.content}</p>
           </div>
           <div className={cx('story-footer')}>
                <div className={cx('footer-profile')}>
                    <img src={story.type ? story.writerPicture : PANDA} alt="제보자 프로필 사진"/>
                    <a href={story.writerUrl} target="_blank" rel="noopener noreferrer">
                        <p className={cx('profile-name', { 'profile-name-underline': story.type })}>{story.type ? `${story.writerName} 님` : "익명의 판다" } 제보</p>
                    </a>
                </div>
           </div>
        </div>
    );
}

export default Story;
