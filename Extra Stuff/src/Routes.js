import React from 'react';
import {
    Router,
    Route
} from 'react-router';

import Log from './login';
import Sign from './SignUp';
import Home from './home';

import {browserHistory} from 'react-router';


// import createBrowserHistory from 'history/createBrowserHistory';

// const customHistory = browserHistory();

const MyRoutes = () => (
    // <Router history={customHistory}>
    <Router>
        <div>
            <hr />
            <Route exact path="/" component={Sign} />
            <Route exact path="/signup" component={Sign} />
            <Route path="/login" component={Log} />
            <Route path="/:home" component={Home} />
            {/*<Route path="/contact/:username" component={Contact} />*/}
            {/*<Route component={Nothing} />*/}

        </div>
    </Router>
)

export default MyRoutes;