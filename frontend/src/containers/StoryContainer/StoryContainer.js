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
        this.props.store.story.getStory(0);
    }
    
    render() {
        const {
            storyList,
            stat,
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
                                    </div>
                                )
                            case 'pending':
                                return <LoaderComponent/>
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