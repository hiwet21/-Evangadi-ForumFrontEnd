import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import "./index.css";
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter  } from "react-router-dom";
import { UserProvider } from './context/userContext';
//  import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
    </React.StrictMode>
  
);


reportWebVitals();