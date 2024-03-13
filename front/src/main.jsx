// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './style/main.css';
import Header from './layout/header/Header.jsx'
import Footer from './layout/footer/Footer.jsx';
import SignIn from './pages/signin/SignIn.jsx';
import User from './pages/user/User.jsx';
import Error from './pages/error/Error.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
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
    </PersistGate>
   </Provider>,
)
