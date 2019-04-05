import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, EditorPage, AdminPage, NotFoundPage } from 'pages';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <>
      <Helmet>
        <title>대소고 대나무 숲</title>
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/edit" component={EditorPage} />
        <Route path="/admin" component={AdminPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
