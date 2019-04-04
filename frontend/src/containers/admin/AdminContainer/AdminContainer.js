import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import LoaderComponent from 'components/common/LoaderComponent';
import CardList from 'components/story/CardList';
import classNames from 'classnames/bind';
import styles from './AdminContainer.scss';
import FullscreenLoader from 'components/common/FullScreenLoader';
import { withRouter } from 'react-router-dom';
import ErrorComponent from 'components/common/ErrorComponent';

const cx = classNames.bind(styles);

@inject('store')
@observer
class AdminContainer extends Component {
  componentDidMount() {
    this.props.store.admin.getStory();
    !this.props.store.admin.maxCount && this.props.store.admin.getCount();
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
      this.props.store.admin.getMoreStory();
    }
  };
  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/admin');
  };
  handleRefresh = () => {
    this.props.store.admin.getStory();
  };

  render() {
    const { waitList, stat, moreStat } = this.props.store.admin;
    return (
      <>
        {(() => {
          switch (stat) {
            case 'success':
              const { onReject, onAllow } = this.props.store.admin;
              return (
                <div className={cx('admin-container')}>
                  <div className={cx('buttons')}>
                    <button
                      className={cx('button', 'refresh')}
                      onClick={this.handleRefresh}
                    >
                      새로고침
                    </button>
                    <button
                      className={cx('button', 'logout')}
                      onClick={this.handleLogout}
                    >
                      로그아웃
                    </button>
                  </div>
                  <CardList
                    list={waitList}
                    type="wait"
                    onReject={onReject}
                    onAllow={onAllow}
                  />
                  {moreStat === 'pending' && <LoaderComponent />}
                </div>
              );
            case 'pending':
              return <LoaderComponent height={'100vh'} />;
            case 'jwtError':
              localStorage.removeItem('token');
              this.props.history.push('/admin');
              return;
            case 'error':
            default:
              return <ErrorComponent onRefresh={this.handleRefresh} />;
          }
        })()}
        {this.props.store.admin.controlStat === 'pending' && (
          <FullscreenLoader />
        )}
      </>
    );
  }
}
export default withRouter(AdminContainer);
