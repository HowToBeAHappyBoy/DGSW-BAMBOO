import { observable } from 'mobx';
import { asyncAction } from 'mobx-utils';
import AdminRepository from './AdminRepository';
import { autobind } from 'core-decorators';

@autobind
class AdminStore {
  @observable waitList = [];
  @observable stat = 'pending';
  @observable controlStat;
  @observable moreStat;
  @observable count = 0;
  @observable maxCount;

  @asyncAction
  async *getCount() {
    try {
      const { data, status } = yield AdminRepository.getCount();
      if (status === 200) {
        this.maxCount = data.count;
      } else {
        this.stat = 'error';
      }
    } catch (error) {
      this.stat = 'error';
    }
  }
  @asyncAction
  async *getStory() {
    this.count = 0;
    this.stat = 'pending';
    try {
      const { data, status } = yield AdminRepository.getStory(this.count, 0);
      if (status === 200) {
        setTimeout(() => {
          console.log(data);
          this.waitList = data.post.map(wait => wait);
          this.count += 5;
          this.stat = 'success';
        }, 500);
      } else {
        this.stat = 'error';
      }
    } catch (error) {
      if (!error.response) {
        this.stat = 'error';
        return;
      }else if(error.response && error.response.status === 401){
        this.stat = 'jwtError';
        return;
      }
    }
  }
  @asyncAction
  async *getMoreStory() {
    console.log(this.maxCount);
    if (
      this.count > this.maxCount ||
      this.moreStat === 'pending' ||
      this.count === 0
    ) {
      return;
    }
    this.moreStat = 'pending';
    try {
      const { data, status } = yield AdminRepository.getStory(this.count, 0);
      if (status === 200) {
        setTimeout(() => {
          const newList = this.waitList.concat(data.post);
          this.waitList = newList;
          this.count += 5;
          this.moreStat = 'success';
        }, 500);
      } else {
        this.moreStat = 'error';
      }
    } catch (error) {
      this.moreStat = 'error';
    }
  }
  @asyncAction
  async *onReject(idx) {
    if (this.controlStat === 'pending') return;
    this.controlStat = 'pending';
    const { data, status } = yield AdminRepository.handleReject(idx);
    if (status === 200) {
      const storyToRemove = this.waitList.find(story => story.idx === idx);
      this.waitList.remove(storyToRemove);
      this.controlStat = 'waiting';
    } else {
      console.dir(data);
    }
  }
  @asyncAction
  async *onAllow(idx) {
    if (this.controlStat === 'pending') return;
    this.controlStat = 'pending';
    const { data, status } = yield AdminRepository.handleAllow(idx);
    if (status === 200) {
      const storyToRemove = this.waitList.find(story => story.idx === idx);
      this.waitList.remove(storyToRemove);
      this.controlStat = 'waiting';
    } else {
      console.dir(data);
    }
  }
}

export default AdminStore;
