import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './main.css';
import Header from './layout/Header.jsx'
import Login from './pages/Login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
     <Header />
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sign-in" element={<Login />} />
      </Routes>
    
    </Router>
   
    
  </React.StrictMode>,
)
