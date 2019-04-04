import React from 'react';
import styles from './PreviewPane.scss';
import classNames from 'classnames/bind';
import Card from 'components/story/Card';

const cx = classNames.bind(styles);

const PreviewPane = ({ story, width }) => {
  return (
    <div className={cx('preview-pane')}>
      <h1 className={cx('title')}>미리보기</h1>
      <Card story={story} style={{ maxWidth: width }} type="preview" />
    </div>
  );
};

export default PreviewPane;
