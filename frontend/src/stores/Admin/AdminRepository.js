import axios from 'axios';
import { SERVER } from 'config/config.json';

class AdminRepository {
  getStory(page, type) {
    return axios.get(`${SERVER}/admin/post?count=${page}&type=${type}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
  }
  getCount() {
    return axios.get(`${SERVER}/admin/count/0`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
  }
  handleAllow = async idx => {
    const url = `${SERVER}/admin/allow/${idx}`;
    return await axios.post(
      url,
      {},
      {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      },
    );
  };
  handleReject = async idx => {
    const url = `${SERVER}/admin/reject/${idx}`;
    return await axios.post(
      url,
      {},
      {
        headers: {
          authorization: localStorage.getItem('token'),
        },
      },
    );
  };
}
export default new AdminRepository();
