import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, EditorPage, AdminPage, NotFoundPage } from 'pages';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/edit" component={EditorPage} />
      <Route path="/admin" component={AdminPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default App;
