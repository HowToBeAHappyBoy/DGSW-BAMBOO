import React from 'react';
import styles from './ImageUploader.scss';
import classNames from 'classnames/bind';
import styled from 'styled-components';
import axios from 'axios';
import { SERVER } from 'config/config.json';
import { GoX } from 'react-icons/go';
import Swal from 'sweetalert2';
import LoaderComponent from 'components/common/LoaderComponent';

const cx = classNames.bind(styles);

const ImageUploader = ({ onUpload, images, onRemove }) => {
  const [stat, setStat] = React.useState('init');

  const handleChange = async e => {
    const file = e.target.files[0];
    let type = file.name.split('.');
    type = type[type.length - 1].toLowerCase();
    console.log(type);
    if (type !== 'png' && type !== 'jpg' && type !== 'jpeg') {
      Swal.fire({
        type: 'error',
        title: '타입 에러',
        text: 'png, jpg, jpeg 형식의 이미지만 업로드 가능합니다',
      });
      return;
    }
    const fd = new FormData();
    fd.append('img', e.target.files[0]);
    setStat('pending');
    await axios
      .post(`${SERVER}/upload/image`, fd)
      .then(res => {
        const { status, data } = res;
        if (status === 200) {
          const image = data.imgs[0];
          onUpload({
            url: image,
          });
          setStat('success');
        }
      })
      .catch(e => {
        Swal.fire({
          type: 'error',
          title: '업로드 에러',
          text: e.message,
        });
        setStat('error');
      });
  };

  return (
    <div
      className={cx(
        'image-upload',
        images.length !== 0 ? 'justify-start' : 'justify-center',
      )}
    >
      <div className="images">
        {images.map(e => {
          return (
            <Thumbnail img={e.url} key={e.url}>
              <div className="close-button-wrapper">
                <GoX
                  size={50}
                  style={{}}
                  onClick={() => {
                    onRemove(e.url);
                  }}
                  className="close-button"
                />
              </div>
            </Thumbnail>
          );
        })}
        {stat === 'pending' && (
          <div
            style={{ display: 'flex', width: '150px', alignItems: 'center' }}
          >
            <LoaderComponent />
          </div>
        )}
      </div>
      {stat !== 'pending' && (
        <label
          className={cx(
            images.length !== 0 ? 'upload-button' : 'primary-upload-button',
          )}
        >
          <input className={cx('blind')} type="file" onChange={handleChange} />
          <p>{images.length !== 0 ? '+' : '이미지 업로드'}</p>
        </label>
      )}
    </div>
  );
};

const Thumbnail = styled.div`
  margin: 0 5px;
  min-width: 150px;
  height: 150px;
  display: block;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  .close-button-wrapper {
    opacity: 0;
    background-color: #454545;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      opacity: 0.7;
      .close-button {
        opacity: 1;
        cursor: pointer;
        color: white;
      }
    }
  }
`;
export default ImageUploader;
