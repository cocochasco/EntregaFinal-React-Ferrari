import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyDQ0Ac90y9h0W2ASXrhLt0JeihOROV64Pc",
  authDomain: "ecommerceonesta.firebaseapp.com",
  projectId: "ecommerceonesta",
  storageBucket: "ecommerceonesta.appspot.com",
  messagingSenderId: "268206025835",
  appId: "1:268206025835:web:3301a39205c84e1bd6d52e"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

