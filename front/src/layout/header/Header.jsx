// import React from 'react';
import logo from '../../assets/argentBankLogo.png';
import { useDispatch } from 'react-redux';
import { FaCircleUser } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './header.scss';
import { logout } from '../../redux/user/userSlice';
// import { useHistory } from "react-router-dom"


const Header = () => {
  const { currentUser } = useSelector(state => state.user)
  const getProfile = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameProfile = (getProfile.firstName + " " + getProfile.lastName)

  const handleLogout = () => {
    dispatch(logout())
   
  }

//  if (!token) {
//     return <navigate to='/sign-in' />;
//   }
  

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
            <span onClick={handleLogout} className='logout'>log out</span>
            : ""}
        </div>
      </nav>
    </div>
  );
};

export default Header;