import { useEffect, useState } from "react";
import Edit from "../../components/Edit/Edit";
import { useSelector, useDispatch } from "react-redux";
import { dataProfile } from '../../redux/user/userSlice';
import './user.scss';



const User = () => {
    const [isEdit, setIsEdit] = useState(false);
    const { currentUser } = useSelector(state => state.user)
    const getfirstName = useSelector(state => state.user)
    const dispatch = useDispatch()

    // const firstName = currentUser.body.firstName
    const token = currentUser.body.token
    const nameProfile = (getfirstName.firstName + " " + getfirstName.lastName)
    console.log(nameProfile);






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
                            // 'accept': 'application/json',
                            'Authorization': 'Bearer ' + token,
                        },
                        // body: '',

                    })
                const dataFetch = await response.json()
                dispatch(dataProfile(dataFetch))


                // console.log(dataFetch);
            } catch (error) {
                console.log("données non récupérées", error);
            }


        }
        fetchData()
    }, [])

    // console.log(dataFetch);

    return (
        <div className="main bg-dark">
            <div className="header">
                {isEdit ? <Edit /> :
                    (<div>
                        <h1>Welcome back<br />{nameProfile}</h1>
                        <button className="edit-button" onClick={() => handleClick(!isEdit)}>Edit Name</button>
                    </div>
                    )
                }





            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="Nameaccount-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>

        </div>
    );
};

export default User;