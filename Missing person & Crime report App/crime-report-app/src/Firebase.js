

import firebase from 'firebase';



// Initialize Firebase
var config = {
  apiKey: "AIzaSyAfPX7X8m-NR1CZNCkI7pVamwbZBNCQmFM",
  authDomain: "criminal-case-app.firebaseapp.com",
  databaseURL: "https://criminal-case-app.firebaseio.com",
  projectId: "criminal-case-app",
  storageBucket: "criminal-case-app.appspot.com",
  messagingSenderId: "398722118259"
};

let fire = firebase.initializeApp(config);

export default fire;