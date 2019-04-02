import React, { Component } from 'react';
import Story from 'components/main/Story';

class StoryList extends Component {
  render() {
    const { storyList } = this.props;
    return (
      <>
        {storyList.map(e => {
          return <Story story={e} key={e.idx} width="1000px" />;
        })}
      </>
    );
  }
}

export default StoryList;
