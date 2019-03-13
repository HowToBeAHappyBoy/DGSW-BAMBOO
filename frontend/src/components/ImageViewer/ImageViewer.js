import React from 'react';
import styles from './ImageViewer.scss';
import classNames from 'classnames/bind';
import { FaImage, FaImages } from "react-icons/fa";

const cx = classNames.bind(styles);

const ImageViewer = ({ images }) => {
    return (
        <div className={cx('image-viewer')}>
            {images.length === 1 ? <FaImage size={40}/> : <FaImages size={40} />}
            <p className={cx('image-title')}>
                {images.length} 장의 사진 포함
            </p>
        </div>
    );
};

export default ImageViewer;