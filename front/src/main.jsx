import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './main.css';
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx';
import SignIn from './pages/SignIn.jsx';
import User from './pages/User.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
     <Header />
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/user" element={<User />} />
      </Routes>
    <Footer />
    </Router>
   
    
   </React.StrictMode>,
)
