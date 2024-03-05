// import React from 'react';
import logo from '../assets/argentBankLogo.png';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
        </Link>
          
          {/* <h1 className="sr-only">Argent Bank</h1> */}
        
        <div>
          <Link to="/sign-in" className="main-nav-item"><FaCircleUser/>Sign In</Link>
          {/* <a  href="./sign-in.html"> */}
         
          
        </div>
      </nav>
    </div>
  );
};

export default Header;