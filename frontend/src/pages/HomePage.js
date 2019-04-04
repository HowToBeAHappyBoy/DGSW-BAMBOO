import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import StoryContainer from 'containers/main/StoryContainer';

const HomePage = () => {
  return (
    <>
      <PageTemplate>
        <StoryContainer />
      </PageTemplate>
    </>
  );
};

export default HomePage;
