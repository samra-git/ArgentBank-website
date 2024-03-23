import { useEffect, useState } from "react";
import Edit from "../../components/Edit/Edit";
import { useSelector, useDispatch } from "react-redux";
import { dataProfile } from '../../redux/user/userSlice';
import { accounts } from '../../datas/data'
import './user.scss';
import Accounts from "../../components/accounts/Accounts";



const User = () => {
    const [isEdit, setIsEdit] = useState(false);
    const { token, firstName, lastName } = useSelector(state => state.user)
    const dispatch = useDispatch()

    console.log(token);

    const handleClick = () => {
        setIsEdit(!isEdit)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/v1/user/profile',
                    {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer ' + token,
                        },
                    })
                const dataFetch = await response.json()
                dispatch(dataProfile(dataFetch))
                console.log(dataFetch);
            } catch (error) {
                console.log("données non récupérées", error);
            }


        }
        fetchData()
    }, [dispatch, token])





    return (
        <div className="main bg-dark">
            <div className="header">
                {isEdit ? <Edit /> :
                    (<div className="headerAccount">
                        <h1>Welcome back<br />{firstName + " " + lastName} </h1>
                        <button className="edit-button" onClick={() => handleClick(!isEdit)}>Edit Name</button>
                    </div>
                    )
                }
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map((account) => (
                <Accounts key={account.id} title={account.title} amount={account.amount} description={account.amountDescription} />
            ))}



        </div>
    );
};

export default User;



