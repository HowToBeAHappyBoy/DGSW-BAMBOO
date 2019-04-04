import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import LoaderComponent from 'components/common/LoaderComponent';
import CardList from 'components/story/CardList';
import classNames from 'classnames/bind';
import styles from './StoryContainer.scss';
import ErrorComponent from 'components/common/ErrorComponent';

const cx = classNames.bind(styles);

@inject('store')
@observer
class StoryContainer extends Component {
  componentDidMount() {
    !this.props.store.story.storyList.length &&
      this.props.store.story.getStory();
    !this.props.store.story.maxCount && this.props.store.story.getCount();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (scrollHeight - innerHeight - scrollTop < 10) {
      console.log('Almost Bottom Of This Browser');
      this.props.store.story.getMoreStory();
    }
  };

  handleRefresh = () => {
    this.props.store.story.getStory();
  };

  render() {
    const { storyList, stat, moreStat } = this.props.store.story;
    console.log(stat);
    storyList.map(e => console.log(e.admin));
    return (
      <>
        {(() => {
          switch (stat) {
            case 'success':
              return (
                <div className={cx('story-container')}>
                  <CardList list={storyList} type="allow" />
                  {moreStat === 'pending' && <LoaderComponent />}
                </div>
              );
            case 'pending':
              return <LoaderComponent height={'100vh'} />;
            case 'error':
            default:
              return <ErrorComponent onRefresh={this.handleRefresh} />;
          }
        })()}
      </>
    );
  }
}
StoryContainer.defaultProps = {};
export default StoryContainer;
