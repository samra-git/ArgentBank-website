// import React from 'react';
import logo from '../assets/argentBankLogo.png';
import { FaCircleUser } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Header = () => {
  const { currentUser } = useSelector(state => state.user)
  const getfirstName = useSelector(state => state.user)
  const nameProfile = (getfirstName.firstName + " " + getfirstName.lastName)
    console.log(nameProfile);
  // console.log(currentUser);
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
          <Link to="/sign-in" className="main-nav-item"><FaCircleUser />
          {currentUser ? <p>{nameProfile}</p> : "Sign In"}</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;