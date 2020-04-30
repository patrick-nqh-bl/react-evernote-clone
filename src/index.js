import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyB32ffi3TuA0JpCtVg4_3W8VIH4v2J5j_Q",
  authDomain: "evernote-clone-ae234.firebaseapp.com",
  databaseURL: "https://evernote-clone-ae234.firebaseio.com",
  projectId: "evernote-clone-ae234",
  storageBucket: "evernote-clone-ae234.appspot.com",
  messagingSenderId: "457119469668",
  appId: "1:457119469668:web:ab58a7e48cf9bddebecf71"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

