import React, { Component } from 'react';
import Story from 'components/main/Story';

class StoryList extends Component {
  render() {
    const { list, type } = this.props;
    return (
      <>
        {list.map(e => {
          return <Story story={e} key={e.idx} width="1000px" type={type} />;
        })}
      </>
    );
  }
}

export default StoryList;
