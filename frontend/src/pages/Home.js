import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import StoryContainer from 'containers/StoryContainer';

const Home = () => {
    return (
        <>
            <PageTemplate>
                    <StoryContainer/>
            </PageTemplate>
        </>
    );
};

export default Home;