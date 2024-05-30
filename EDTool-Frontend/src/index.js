import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import SignInSignUpContainer from './componenets/signin/SignInSignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componenets/homepage/home';
import Landing from './componenets/landing/landing';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> 
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignInSignUpContainer />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
