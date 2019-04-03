import StoryStore from './Story';
import AdminStore from './Admin';

const stores = {
  story: new StoryStore(),
  admin: new AdminStore(),
};

export default stores;
