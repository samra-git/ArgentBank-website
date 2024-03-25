// import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './edit.scss';
import {  useState } from "react";
import { updateFailure, updateStart, updateSucces } from "../../redux/user/userSlice";
import { updateUser } from "../../services/api";

const Edit = () => {

    const { lastName, firstName, userName, token } = useSelector(state => state.user)
    const dispatch = useDispatch();
    const [username, setUsername] = useState( userName )
    const [isEdit, setIsEdit] = useState(true);
    console.log(token);

    const handleClick = () => {
        setIsEdit(!isEdit)

    }

    const fetchUpdateUsername = async () => {

        try {
            dispatch(updateStart()) 
            const data = await updateUser(username, token)
            dispatch(updateSucces(data))
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

    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchUpdateUsername();
        }
    }

    console.log(username);

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