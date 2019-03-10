import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Report } from 'pages';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/report" component={Report}/>
            </Switch>
        </div>
    );
};

export default App;