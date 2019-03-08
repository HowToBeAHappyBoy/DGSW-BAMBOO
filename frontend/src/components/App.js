import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Suggest, Report, TipOff } from 'pages';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/tipoff" component={TipOff}/>
                <Route path="/report" component={Report}/>
                <Route path="/suggest" component={Suggest}/>
            </Switch>
        </div>
    );
};

export default App;