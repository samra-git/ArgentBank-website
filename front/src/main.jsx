import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './main.css';
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx';
import SignIn from './pages/SignIn.jsx';
import User from './pages/User.jsx';
import Error from './pages/Error.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
     <Header />
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/user" element={<User />} />
      <Route path="*"  element={<Error />} />
      </Routes>
    <Footer />
    </Router>
   
    
   </Provider>,
)
