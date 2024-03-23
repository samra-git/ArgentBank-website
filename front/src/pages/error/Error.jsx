/* eslint-disable react/no-unescaped-entities */
import './error.scss'
import { NavLink } from 'react-router-dom';
import { GiExitDoor } from "react-icons/gi";


const Error = () => {
  return (

    <div className="error">
      <h1>404</h1>
      <h3>Oups! La page que vous demandez n'existe pas.</h3>
      <NavLink to="/" className="linkError">
        <div className='linkExitError'>
          <span>Retourner sur la page d'accueil</span> <GiExitDoor className='exitError'/>
        </div></NavLink>

    </div>

  );
};

export default Error;