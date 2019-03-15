import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, ReportPage } from 'pages';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/report" component={ReportPage}/>
            </Switch>
        </div>
    );
};

export default App;