// import React from 'react';
import logo from '../../assets/argentBankLogo.png';
import { FaCircleUser } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.scss';


const Header = () => {
  const { currentUser } = useSelector(state => state.user)
  const getProfile = useSelector(state => state.user)


  const nameProfile = (getProfile.firstName + " " + getProfile.lastName)
  // const connect = () => {
  //   if (c)
  // }

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
          <Link disabled={currentUser} to="/sign-in" className="main-nav-item"><FaCircleUser />
            {currentUser ? (
              <div className='main-nav-row'>
                <p>{nameProfile}</p>                
              </div>
            ) : "Sign In"}
            
          </Link>
          {currentUser ? 
          <p className='logout'>log out</p>
        : ""}
        </div>
      </nav>
    </div>
  );
};

export default Header;