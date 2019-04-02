import React from 'react';
import './Login.scss';
import { MdPermIdentity, MdLockOutline } from 'react-icons/md';
import axios from 'axios';
import { SERVER } from 'config/config.json';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

const Login = ({ history }) => {
  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');
  const handleSubmit = async () => {
    await axios
      .post(`${SERVER}/admin/cert/signin`, { id, pw })
      .then(async res => {
        await Swal.fire({
          type: 'success',
          title: '로그인에 성공했습니다',
          text: '안뇽 어드민',
        });
        localStorage.setItem('token', res.data.token);
        history.push('/admin');
      })
      .catch(e => {
        Swal.fire({
          type: 'error',
          title: '로그인에 실패했습니다',
          text: '세상에나..',
        });
      });
  };
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-form">
          <h1>관계자 외 출입 금지!</h1>
          <div className="form-input">
            <MdPermIdentity className="input-icon" />
            <input
              placeholder="Id"
              value={id}
              onChange={e => {
                setId(e.target.value);
              }}
            />
          </div>
          <div className="form-input">
            <MdLockOutline className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={pw}
              onChange={e => {
                setPw(e.target.value);
              }}
            />
          </div>
          <button onClick={handleSubmit}>관리자 로그인</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
