// import React from 'react';
import { useSelector } from "react-redux";
import './edit.scss';

const Edit = () => {
    const getProfile = useSelector(state => state.user)
    
    
    // console.log(nameProfile);
    return (
        <div>
            <h1>username</h1>
            <div className="columnInput">
            <label>
             User name :  <input type="text" value={getProfile.userName} /> 
            </label>
            <label>
             Fist name :  <input type="text" value={getProfile.firstName} /> 
            </label>
            <label>
             Last name :  <input type="text" value={getProfile.lastName} /> 
            </label>
            </div>

            

            
        


        </div>


    );
};

export default Edit;