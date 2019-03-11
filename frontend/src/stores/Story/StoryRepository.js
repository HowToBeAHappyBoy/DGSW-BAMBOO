import axios from 'axios';
import {
    SERVER
} from 'config/config.json';

class StoryRepository {
    getStory(page) {
        return axios.get(`${SERVER}/user/post/${page}`);
    }
    getCount() {
        return axios.get(`${SERVER}/user/count`);
    }
}
export default new StoryRepository();