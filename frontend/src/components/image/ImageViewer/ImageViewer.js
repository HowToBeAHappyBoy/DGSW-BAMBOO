import React, { useState } from 'react';
import styles from './ImageViewer.scss';
import classNames from 'classnames/bind';
import { FaImage, FaImages } from 'react-icons/fa';
import ImageModal from 'components/image/ImageModal';

const cx = classNames.bind(styles);

const ImageViewer = ({ images }) => {
  const [show, setShow] = useState(false);
  const changeShow = e => {
    if (e.target.id === 'modal-container') {
      setShow(!show);
      document.body.style.overflow = 'auto';
      return;
    } else {
      return;
    }
  };
  return (
    <>
      <div
        className={cx('image-viewer')}
        onClick={() => {
          setShow(true);
          document.body.style.overflow = 'hidden';
        }}
      >
        <div className={cx('image-items')}>
          {images.length === 1 ? (
            <FaImage size={40} className={cx('image-icon')} />
          ) : (
            <FaImages size={40} className={cx('image-icon')} />
          )}
          <p className={cx('image-title')}>{images.length} 장의 사진 포함</p>
        </div>
      </div>
      {show && (
        <ImageModal
          images={images}
          change={changeShow}
          cancel={setShow}
          show={show}
        />
      )}
    </>
  );
};

export default ImageViewer;
