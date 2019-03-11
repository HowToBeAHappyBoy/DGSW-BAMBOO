import { observable, action } from 'mobx';
import { asyncAction } from 'mobx-utils';
import StoryRepository from './StoryRepository';
import { autobind } from 'core-decorators';

@autobind
class StoryStore {
    @observable storyList = [];
    @observable stat = 'pending';

    @asyncAction
    async *getStory (page) {
        try{
            const { data, status } = yield StoryRepository.getStory(page);
            if (status === 200) {
                this.stat = 'success';
                this.storyList = data.post.map(story => story);
            } else {
                this.stat = 'error';
            }
        } catch (error) {
            this.stat = 'error';
        }
    }
}

export default StoryStore