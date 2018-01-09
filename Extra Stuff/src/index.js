import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sign from './SignUp';
import MyRoutes from './Routes';


import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider} from 'material-ui';
import TextField from 'material-ui/TextField';
{/*<MuiThemeProvider>
    <App />
</MuiThemeProvider>*/}


ReactDOM.render(



<MyRoutes/>, document.getElementById('root'));
registerServiceWorker();
