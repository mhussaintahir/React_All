import React from 'react';
import { Router, Route } from 'react-router-dom';
import Sign from './SignUp';
import Log from './Login';
import Home from './Home';
import MissingPersons from './Missing-Person';
import Complains from './Complain';
import CrimeReports from './Crime-Report';

import createBrowserHistory from 'history/createBrowserHistory';
import Posts from './AllPosts';



// import Navbar from './components/Navbar';
// import CreatePoll from './container/CreatePoll';
// import Polling from './container/Poll';


const customHistory = createBrowserHistory()

const MyRoutes = () => (
    <Router history={customHistory}>
        <div>
            {/* <Navbar /> */}

            <Route exact path="/" component={Log} />
            <Route path="/login" component={Log} />
            <Route path="/signup" component={Sign} />
            <Route path="/home" component={Home} />
            <Route path="/home/crime-report" component={CrimeReports} />
            <Route path="/home/missing-person" component={MissingPersons} />
            <Route path="/home/complain" component={Complains} />
            <Route path="/all-posts" component={Posts} />
            
            
            
            {/*<Route path="/contact/:username" component={Contact} />*/}
            {/*<Route component={Nothing} />*/}

        </div>
    </Router>
)

export default MyRoutes;