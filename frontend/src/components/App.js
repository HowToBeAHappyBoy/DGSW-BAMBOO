import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, EditorPage } from 'pages';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/edit" component={EditorPage} />
    </Switch>
  );
};

export default App;
