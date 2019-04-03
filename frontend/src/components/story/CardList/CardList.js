import React, { Component } from 'react';
import Card from 'components/story/Card';

class CardList extends Component {
  render() {
    const { list, type, onReject, onAllow } = this.props;
    return (
      <>
        {list.map(e => {
          return (
            <Card
              story={e}
              key={e.idx}
              onReject={onReject}
              onAllow={onAllow}
              width="1000px"
              type={type}
            />
          );
        })}
      </>
    );
  }
}

export default CardList;
