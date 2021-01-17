import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXrNOicBclRrlq9ww6DpNi6dIA5bd7_Xo",
    authDomain: "cart-fc1c4.firebaseapp.com",
    projectId: "cart-fc1c4",
    storageBucket: "cart-fc1c4.appspot.com",
    messagingSenderId: "849359957039",
    appId: "1:849359957039:web:4290cd982fd4b761296ada"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);