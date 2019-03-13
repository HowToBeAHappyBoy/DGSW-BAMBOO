import React from 'react';
import styles from './ImageModal.scss';
import classNames from 'classnames/bind';
import { GoX } from "react-icons/go";
import ImageGallery from 'react-image-gallery';

const cx = classNames.bind(styles);

const ImageModal = ({ images, change, show }) => {
  const image = []
  images.forEach(e => {
    image.push({
      original: e.url,
    });
  })
    return (
        <div className={cx('image-modal', show ? 'display-block' : 'display-none' )}>
            <button className={cx('image-cancel')} onClick={()=>{change(false)}}>
                <GoX size={30} className={cx('cancel-button')}/>
            </button>
            <div className={cx('image-container')}>
                <ImageGallery
                  items={image}
                  showThumbnails={false}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  />
            </div>
        </div>
    );
}

export default ImageModal;
