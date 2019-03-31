import React from 'react';
import styles from './PreviewPane.scss';
import classNames from 'classnames/bind';
import Story from 'components/Story';

const cx = classNames.bind(styles);

const PreviewPane = ({ story, width }) => {
  return (
    <div className={cx('preview-pane')}>
      <h1 className={cx('title')}>미리보기</h1>
      <Story story={story} style={{ maxWidth: width }} />
    </div>
  );
};

export default PreviewPane;
