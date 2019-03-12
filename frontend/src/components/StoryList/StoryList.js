import React, { Component } from 'react';
import Story from 'components/Story';

class StoryList extends Component {
    render() {
        const { storyList } = this.props;
        return (
            <>
            {
                storyList.map(e => {
                    return <Story story={e}/>
                })
            }
            </>
        );
    }
}

export default StoryList;
