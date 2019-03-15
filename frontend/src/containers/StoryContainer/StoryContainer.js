import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import LoaderComponent from 'components/common/LoaderComponent';
import StoryList from 'components/StoryList';
import classNames from 'classnames/bind';
import styles from './StoryContainer.scss';

const cx = classNames.bind(styles)

@inject('store')
@observer
class StoryContainer extends Component {
    
    componentDidMount() {
        !this.props.store.story.storyList.length && this.props.store.story.getStory();
        !this.props.store.story.maxCount && this.props.store.story.getCount();
        window.addEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { innerHeight } = window;
        const { scrollHeight } = document.body;
        // IE에서는 document.documentElement 를 사용.
        const scrollTop =
          (document.documentElement && document.documentElement.scrollTop) ||
          document.body.scrollTop;
        // 스크롤링 했을때, 브라우저의 가장 밑에서 100정도 높이가 남았을때에 실행하기위함.
        if (scrollHeight - innerHeight - scrollTop < 10) {
          console.log("Almost Bottom Of This Browser");
          this.props.store.story.getMoreStory();
        }
      };

    render() {
        const {
            storyList,
            stat,
            moreStat
        } = this.props.store.story;
        console.log(stat);
        storyList.map(e => (
            console.log(e.admin)
        ));
        return (
            <>
                {
                    (()=>{
                        switch(stat){
                            case 'success':
                                return(
                                    <div className={cx('story-container')}>
                                        <StoryList storyList={storyList}/>
                                        {moreStat === 'pending' && <LoaderComponent/>}
                                    </div>
                                )
                            case 'pending':
                                return <LoaderComponent height={'100vh'}/>
                            case 'error':
                                return <div>에러</div>
                            default:
                                return <div>에러</div>
                        }
                    })()
                }
            </>
        );
    }
}
StoryContainer.defaultProps = {
    
};
export default StoryContainer;