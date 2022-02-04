import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAfFcvuOKMkHIjaTtSVRd6rae5DdbrsLxM",
  authDomain: "photo-tagging-app-12c32.firebaseapp.com",
  projectId: "photo-tagging-app-12c32",
  storageBucket: "photo-tagging-app-12c32.appspot.com",
  messagingSenderId: "17546518751",
  appId: "1:17546518751:web:b6a842e5ba66b74547c96a"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);