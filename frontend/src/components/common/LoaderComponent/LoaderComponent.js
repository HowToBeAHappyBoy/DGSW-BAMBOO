import React from 'react';
import classNames from 'classnames/bind';
import styles from './LoaderComponent.scss';
import styled from 'styled-components'

const cx = classNames.bind(styles);

const LoaderComponent = ({ height }) => {
    return (
        <Container height={height}>
            <img src="https://loading.io/spinners/rolling/lg.curve-bars-loading-indicator.gif" alt="spiner" className={cx('spiner')}/>
        </Container>
    );
};

const Container = styled.div `
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    height : ${(props)=>props.height}
`;

export default LoaderComponent;