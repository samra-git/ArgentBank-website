import { useState } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { signInFailure, signInStart, signInSucces } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';


const SignIn = () => {
    const [formData, setFormData] = useState({});
    const { loading, error } = useSelector((state) => state.user)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            dispatch(signInStart())
            const res = await fetch('http://localhost:3001/api/v1/user/login',
            {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
              });
            console.log(res);
            const data = await res.json();
            console.log(data);

            if (data.status !== 200){
                dispatch(signInFailure(data.message))
                
            } else{
                navigate('/user')
                dispatch(signInSucces(data))
            }
            
            // setError(null);
            

        } catch (error) {
            dispatch(signInFailure(error.message))
            dispatch(signInStart(false))

        }

        console.log(formData);

    }
    const handleChange = (e) => {
        // e.preventDefault();
        setFormData(
            {
                ...formData,
                [e.target.id]: e.target.value,
            }
        )
    }
    return (
        <>
            <div className="main bg-dark body">
                <section className="sign-in-content">
                    <FaCircleUser />
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label>Username
                                <input type="email" id="email" onChange={handleChange} /></label>
                        </div>
                        <div className="input-wrapper">
                            <label>Password
                                <input type="password" id="password" onChange={handleChange} /></label>
                        </div>
                        <div className="input-remember">
                            <label><input type="checkbox" id="remember-me" />
                                Remember me</label>

                        </div>
                        {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                        {/* <Link to="/user">Sign In</Link> */}
                        <button className="sign-in-button">{!loading ? 'Sign In' : 'loading...'}</button>

                        {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                        {/* <!-- <button class="sign-in-button">Sign In</button> --> */}
                        {/* <!--  -->Name */}
                    </form>
                    <div>
                       <p className='error'>{error && 'email et/ou mot de passe incorrect'}</p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SignIn;