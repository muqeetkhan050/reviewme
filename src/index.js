// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';




// ReactDOM.createRoot(document.getElementById("root")).render(


//       <App />
  
  
// );


// reportWebVitals();


// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // ← Import here

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider> {/* ← Wrap App */}
      <App />
    </AuthProvider>
  </BrowserRouter>
);

reportWebVitals();