import React, { useState } from 'react';
import styles from './ImageViewer.scss';
import classNames from 'classnames/bind';
import { FaImage, FaImages } from "react-icons/fa";
import ImageModal from 'components/ImageModal';

const cx = classNames.bind(styles);

const ImageViewer = ({ images }) => {
    const [show, setShow] = useState(false);
    return (
        <>
        <div className={cx('image-viewer')} onClick={()=>{setShow(true)}}>
            {images.length === 1 ? <FaImage size={40}/> : <FaImages size={40} />}
            <p className={cx('image-title')}>
                {images.length} 장의 사진 포함
            </p>
        </div>
        {show && <ImageModal images={images} change={setShow} show={show}/>}
        </>
    );
};

export default ImageViewer;