import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import{App } from './App'
// import Clock from './Clock';
// import DateComponent from './DateComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import EventsLearning from './EventsLearning';
import Counter from './CounterComponent';



ReactDOM.render(
  // <App />

  // <Clock />
  // <DateComponent />

  // <EventsLearning/>

  <Counter />


  ,
  document.getElementById('root'));
registerServiceWorker();
