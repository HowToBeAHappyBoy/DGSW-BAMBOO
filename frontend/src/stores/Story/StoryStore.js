import { observable, action } from 'mobx';
import { asyncAction } from 'mobx-utils';
import StoryRepository from './StoryRepository';
import { autobind } from 'core-decorators';

@autobind
class StoryStore {
    @observable storyList = [];
    @observable stat = 'pending';
    @observable moreStat;
    @observable count = 0;
    @observable maxCount;

    @asyncAction
    async *getCount () {
        try{
            const { data, status } = yield StoryRepository.getCount();
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
    async *getStory () {
        try{
            const { data, status } = yield StoryRepository.getStory(this.count);
            if (status === 200) {
                setTimeout(()=>{
                    this.stat = 'success';
                    this.storyList = data.post.map(story => story);
                    this.count += 5;
                }, 1000);
            } else {
                this.stat = 'error';
            }
        } catch (error) {   
            this.stat = 'error';
        }
    }
    @asyncAction
    async *getMoreStory () {
        if(this.count > this.maxCount || this.moreStat === 'pending'){
            return;
        }
        this.moreStat = 'pending';
        try{
            const { data, status } = yield StoryRepository.getStory(this.count);
            if (status === 200) {
                setTimeout(()=>{
                    this.moreStat = 'success';
                    const newList = this.storyList.concat(data.post);
                    this.storyList = newList;
                    this.count += 5;
                })
            } else {
                this.moreStat = 'error';
            }
        } catch (error) {   
            this.moreStat = 'error';
        }
    }
}

export default StoryStore