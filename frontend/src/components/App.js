import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, ReportPage, EditorPage } from 'pages';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/report" component={ReportPage} />
      <Route path="/edit" component={EditorPage} />
    </Switch>
  );
};

export default App;
