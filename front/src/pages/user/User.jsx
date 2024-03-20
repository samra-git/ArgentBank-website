import { useEffect, useState } from "react";
import Edit from "../../components/Edit/Edit";
import { useSelector, useDispatch } from "react-redux";
import { dataProfile } from '../../redux/user/userSlice';
import './user.scss';



const User = () => {
    const [isEdit, setIsEdit] = useState(false);
    const { currentUser } = useSelector(state => state.user)
    const profile = useSelector(state => state.user)
    const dispatch = useDispatch()

    const firstName = profile.firstName
    const token = currentUser.body.token
    const nameProfile = (profile.firstName + " " + profile.lastName)
    console.log(nameProfile);
    console.log(firstName);


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
    }, [])

   

   

    return (
        <div className="main bg-dark">
            <div className="header">
                {isEdit ? <Edit /> :
                    (<div className="headerAccount">
                        <h1>Welcome back<br />{nameProfile} </h1>
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





// import { useEffect, useState } from "react";
// import Edit from "../../components/Edit/Edit";
// import { useSelector, useDispatch } from "react-redux";
// import { dataProfile } from '../../redux/user/userSlice';
// import './user.scss';



// const User = () => {
//     const [isEdit, setIsEdit] = useState(false);
//     const { currentUse } = useSelector(state => state.user)
//     const profile = useSelector(state => state.user)
//     const dispatch = useDispatch()

//     const firstName = profile.firstName
//     const token = currentUse.body.token
//     const nameProfile = (profile.firstName + " " + profile.lastName)
//     console.log(nameProfile);
//     console.log(firstName);
//     console.log(token);


//     const handleClick = () => {
//         setIsEdit(!isEdit)
//     }

//     useEffect(() => {
//         const fetchData = async () => {
            

//             try {
//                 const response = await fetch('http://localhost:3001/api/v1/user/profile',
//                     {
//                         method: 'POST',
//                         headers: {                           
//                             'Authorization': 'Bearer ' + token,
//                         },
//                     })
//                 const dataFetch = await response.json();
                
//                 if (dataFetch.status !== 200) {
//                     return 'erreur'
                    
//                 }
//                 dispatch(dataProfile(dataFetch));
//                 console.log(dataFetch);
//             } catch (error) {
//                 console.log("données non récupérées", error);
                
//             }


//         }
//         fetchData()
//     }, [token])

   

//     return (
//         <div className="main bg-dark">
//             <div className="header">
//                 {isEdit ? <Edit /> :
//                     (<div>
//                         <h1>Welcome back<br />{nameProfile} </h1>
//                         <button className="edit-button" onClick={handleClick}>Edit Name</button>
//                     </div>
//                     )
//                 }





//             </div>
//             <h2 className="sr-only">Accounts</h2>
//             <section className="account">
//                 <div className="account-content-wrapper">
//                     <h3 className="account-title">Argent Bank Checking (x8349)</h3>
//                     <p className="account-amount">$2,082.79</p>
//                     <p className="Nameaccount-amount-description">Available Balance</p>
//                 </div>
//                 <div className="account-content-wrapper cta">
//                     <button className="transaction-button">View transactions</button>
//                 </div>
//             </section>
//             <section className="account">
//                 <div className="account-content-wrapper">
//                     <h3 className="account-title">Argent Bank Savings (x6712)</h3>
//                     <p className="account-amount">$10,928.42</p>
//                     <p className="account-amount-description">Available Balance</p>
//                 </div>
//                 <div className="account-content-wrapper cta">
//                     <button className="transaction-button">View transactions</button>
//                 </div>
//             </section>
//             <section className="account">
//                 <div className="account-content-wrapper">
//                     <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
//                     <p className="account-amount">$184.30</p>
//                     <p className="account-amount-description">Current Balance</p>
//                 </div>
//                 <div className="account-content-wrapper cta">
//                     <button className="transaction-button">View transactions</button>
//                 </div>
//             </section>

//         </div>
//     );
// };

// export default User;



