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
        <div>
          <Link to="/sign-in" className="main-nav-item"><FaCircleUser />Sign In</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;