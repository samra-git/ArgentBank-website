// import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './edit.scss';
import { useState } from "react";
import { updateFailure, updateStart, updateSucces } from "../../redux/user/userSlice";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom"

const Edit = () => {

    const getProfile = useSelector(state => state.user)
    const { currentUser } = useSelector(state => state.user)
    const profile = useSelector(state => state.user)

    const dispatch = useDispatch();
    const nameProfile = (profile.firstName + " " + profile.lastName)
    const [username, setUsername] = useState(getProfile.userName)
    const token = currentUser.body.token
    const [isEdit, setIsEdit] = useState(true);
    // const navigate = useNavigate()
    console.log(token);

    const handleClick = () => {
        // window.location.reload()
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
            console.log(data);
            if (data.status !== 200) {
                dispatch(updateFailure(data.message))

            }
            dispatch(updateSucces(data))


        } catch (error) {
            console.log(error);
            dispatch(updateFailure(error))



        }
    }
    const handleUpdateUsername = (e) => {
        setUsername(e.target.value)

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
                        <h1>Welcome back<br />{nameProfile} </h1>
                        <button className="edit-button" onClick={() => handleClick(!isEdit)}>Edit Name</button>
                    </div>
                    ) :  (<div>
                 <h1>Edit User Info</h1>

            <form onSubmit={fetchUpdateUsername}>
                <div className="columnInput ">
                    <label>
                        Username :  <input type="text" value={username} onChange={handleUpdateUsername} onKeyDown={handleKeyDown} />
                    </label>
                    <label>
                        Fistname :  <input type="text" value={getProfile.firstName} readOnly />
                    </label>
                    <label>
                        Lastname :  <input type="text" value={getProfile.lastName} readOnly />
                    </label>
                </div>


            </form>
            <div className="edit-button-profile">
                <button type="submit" className="edit-button mt-10">Save</button>
                <button onClick={handleClick} className="edit-button mt-10">Cancel</button>
            </div>

            </div>)

        }
           
           
        </div>

    );
};

export default Edit;