import React from 'react';
import classNames from 'classnames/bind';
import styles from './LoaderComponent.scss';

const cx = classNames.bind(styles);

const LoaderComponent = () => {
    return (
        <div className={cx('container')}>
            <img src="https://loading.io/spinners/rolling/lg.curve-bars-loading-indicator.gif" alt="spiner" className={cx('spiner')}/>
        </div>
    );
};

export default LoaderComponent;