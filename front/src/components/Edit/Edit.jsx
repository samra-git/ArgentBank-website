// import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './edit.scss';
import {  useState } from "react";
import { updateFailure, updateStart, updateSucces } from "../../redux/user/userSlice";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom"

const Edit = () => {

    // const getProfile = useSelector(state => state.user)
    const { lastName, firstName, userName, token } = useSelector(state => state.user)
    // const profile = useSelector(state => state.user)

    const dispatch = useDispatch();
    // const nameProfile = (profile.firstName + " " + profile.lastName)
    const [username, setUsername] = useState( userName )
    // const token = currentUser.body.token
    const [isEdit, setIsEdit] = useState(true);
    // const navigate = useNavigate()
    console.log(token);

    const handleClick = () => {

        setIsEdit(!isEdit)

    }

    const fetchUpdateUsername = async () => {

        try {
            dispatch(updateStart())
            const response = await fetch('http://localhost:3001/api/v1/user/profile',
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token,
                    },
                    body: JSON.stringify({ userName: username })
                })

            const data = await response.json()
            dispatch(updateSucces(data))
            // dispatch(dataProfile(data))

            console.log(data);
            if (data.status !== 200) {
                dispatch(updateFailure(data.message))

            }


        } catch (error) {
            console.log(error);
            dispatch(updateFailure(error))


        }
    }

   
    const handleUpdateUsername = (e) => {
        setUsername(e.target.value)
        // dispatch(dataProfile(e.target.value))

    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchUpdateUsername();
        }
    }

    console.log(username);

    // console.log(nameProfile);
    return (
        <div className="edit">
            {!isEdit ?
                (<div>
                    <h1>Welcome back<br />{firstName + " " + lastName} </h1>
                    <button className="edit-button" onClick={() => handleClick(!isEdit)}>Edit Name</button>
                </div>
                ) : (<div className="editForm">

                    <h1>Edit User Info</h1>

                    <form onSubmit={fetchUpdateUsername}>
                        <div className="columnInput ">
                            <div><label htmlFor="username">Username :  </label>
                                <input type="text" id="username" value={username} className="input-edit" onChange={handleUpdateUsername} onKeyDown={handleKeyDown} />
                            </div>

                            <div><label htmlFor="firstname">Fistname : </label>
                                <input type="text" id="firstname" value={firstName} className="input-edit" readOnly />
                            </div>

                            <div><label htmlFor="lastname"> Lastname :</label>
                                <input type="text" id="lastname" value={lastName} className="input-edit" readOnly />
                            </div>

                        </div>


                    </form>
                    <div className="edit-button-profile">
                        <button type="submit" className="edit-button mt-10">Save</button>
                        <button type="button" onClick={handleClick} className="edit-button mt-10">Cancel</button>
                    </div>

                </div>)

            }


        </div>

    );
};

export default Edit;