import React from 'react';
import styles from './EditorPane.scss';
import classNames from 'classnames/bind';
import ImageUploader from 'components/image/ImageUploader';

const cx = classNames.bind(styles);

const EditorPane = props => {
  const { images, content, onUpload, onRemove, onChange } = props;
  return (
    <div className={cx('editor-pane')}>
      <div className={cx('code-editor')}>
        <textarea
          className={cx('editor-textarea')}
          value={content}
          onChange={onChange}
          name="content"
          placeholder="임금님 귀는 당나귀 귀!"
        />
        <div className={cx('editor-images')}>
          <ImageUploader
            images={images}
            onUpload={onUpload}
            onRemove={onRemove}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorPane;
