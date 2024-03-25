// import React from 'react';
import logo from '../../assets/argentBankLogo.png';
import { useDispatch } from 'react-redux';
import { FaCircleUser, FaPowerOff } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.scss';
import { logout } from '../../redux/user/userSlice';



const Header = () => {
  const { currentUser, firstName } = useSelector(state => state.user)
  // const getProfile = useSelector(state => state.user)
  console.log(currentUser);
  console.log(firstName);

  const dispatch = useDispatch();
  

  // const nameProfile = (getProfile.firstName + " " + getProfile.lastName)

  const handleLogout = () => {
    dispatch(logout())
  }


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
        <div className='main-nav-connect'>
         {currentUser ?  <Link  to="/user" className="main-nav-item"><FaCircleUser />
            
              <div className='main-nav-row'>
                <p>{ firstName }</p>
              </div>
              </Link> : <Link to='/sign-in'>{"Sign In"}</Link>}

        
          <Link to="/" >
            {currentUser ?
            <div>
               
              <span onClick={handleLogout} className='logout' title="log out" > <FaPowerOff /></span>
              
            </div> : ""
}
          </Link>


        </div>
      </nav>
    </div>
  );
};

export default Header;