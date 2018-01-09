import React from 'react';
import { Router, Route } from 'react-router-dom';
import Sign from './SignUp';
import Log from './Login';
import Home from './Home';



// import Navbar from './components/Navbar';
// import CreatePoll from './container/CreatePoll';
// import Polling from './container/Poll';

import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory()

const MyRoutes = () => (
    <Router history={customHistory}>
        <div>
            {/* <Navbar /> */}

            <Route exact path="/" component={Log} />
            <Route path="/login" component={Log} />
            <Route path="/signup" component={Sign} />
            <Route path="/home" component={Home} />
            
            {/*<Route path="/contact/:username" component={Contact} />*/}
            {/*<Route component={Nothing} />*/}

        </div>
    </Router>
)

export default MyRoutes;