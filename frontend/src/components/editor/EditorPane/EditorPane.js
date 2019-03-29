import React, { Component } from 'react';
import styles from './EditorPane.scss';
import classNames from 'classnames/bind';
import ImageUploader from 'components/image/ImageUploader';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const cx = classNames.bind(styles);

class EditorPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      type: 0,
      idx: 0,
      writerName: '',
      writerPicture: '',
      writerUrl: '',
      content: '',
      writeDate: new Date(),
      allowDate: new Date(),
      showImages: true,
    };
  }
  handleUpload = img => {
    this.setState({
      ...this.state,
      images: [...this.state.images].concat([img]),
    });
    console.log(this.state.images);
  };
  handleRemove = url => {
    const { images } = this.state;
    this.setState({
      images: images.filter(image => image.url !== url),
    });
  };

  handleView = _ => {
    this.setState({
      showImages: !this.state.showImages,
    });
  };
  render() {
    const view = this.state.showImages ? 'block' : 'none';
    return (
      <div className={cx('editor-pane')}>
        <div className={cx('code-editor')}>
          <textarea className={cx('editor-textarea')} />
          <div onClick={this.handleView} className={cx('image-control')}>
            {this.state.showImages ? (
              <FaChevronDown className={cx('control-btn')} />
            ) : (
              <FaChevronUp className={cx('control-btn')} />
            )}
          </div>
          <div className={cx('editor-images')} style={{ display: view }}>
            <ImageUploader
              images={this.state.images}
              onUpload={this.handleUpload}
              onRemove={this.handleRemove}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default EditorPane;
