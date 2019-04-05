import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import { Helmet } from 'react-helmet';

const EditorPage = () => {
  return (
    <>
      <Helmet>
        <title>제보하기 | 대대숲</title>
      </Helmet>
      <EditorTemplate />
    </>
  );
};

export default EditorPage;
