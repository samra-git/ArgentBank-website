import { useState, useEffect } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { signInFailure, signInStart, signInSucces, signInToken } from '../../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import './signin.scss';


const SignIn = () => {
    const [formData, setFormData] = useState({});
    const { currentUser } = useSelector((state) => state.user)
    const [loading, setLoading] = useState(false)
    const [rememberMe, setRememberMe] = useState(false);
    const [errorLogin, setErrorLogin] = useState()

    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(formData);
    console.log(currentUser);
    console.log();


    useEffect(() => {
        // Vérifier s'il y a des informations de connexion dans le localStorage au chargement de la page
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        const rememberedPassword = localStorage.getItem('rememberedPassword');

        if (rememberedEmail && rememberedPassword) {
            setFormData({ email: rememberedEmail, password: rememberedPassword });
        }
    }, []);


    const handleRemember = (e) => {

        const checked = e.target.checked;
        setRememberMe(checked);

        if (checked) {
            // Si Remember Me est coché, sauvegardez les informations d'identification dans le localStorage
            localStorage.setItem('rememberedEmail', formData.email);
            localStorage.setItem('rememberedPassword', formData.password);
        } else {
            // Si Remember Me est décoché, supprimez les informations d'identification du localStorage
            localStorage.removeItem('rememberedEmail');
            localStorage.removeItem('rememberedPassword');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            dispatch(signInStart())
            setLoading(true)
            // dispatch(rememberData(formData))

            const res = await fetch('http://localhost:3001/api/v1/user/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
            const data = await res.json();
            const token = data.body.token
            
            // localStorage.setItem('token', token)
            console.log(token);
            if (data.status === 400) {
                const errorLog = data.message
                setErrorLogin(errorLog);

                return
            }
            // dispatch(signInSucces(token))
            // dispatch(signInSucces(data))
            dispatch(signInToken(data.body.token))



            if (data.status === false) {
                dispatch(signInFailure(data.message))
                console.log(data.message);
                return

            }


            else {

                if (formData.rememberMe) {
                    localStorage.setItem('rememberedEmail', formData.email);
                    localStorage.setItem('rememberedPassword', formData.password);
                }
                navigate('/user')
                dispatch(signInSucces(data))

            }

        } catch (error) {
            dispatch(signInFailure(error.message))
            setLoading(false)
            // dispatch(signInStart(false))
            console.error(error);

         } finally {

            setLoading(false)
        

        }
    }

  

    // console.log(error);
    const handleChange = (e) => {

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
                                <input type="email" id="email" onChange={handleChange} value={formData.email || ''} /></label>
                        </div>
                        <div className="input-wrapper">
                            <label>Password
                                <input type="password" id="password" onChange={handleChange} value={formData.password || ''} /></label>
                        </div>
                        <div className="input-remember">
                            <label><input type="checkbox" checked={rememberMe} id="remember-me" onChange={handleRemember} />
                                Remember me</label>

                        </div>
                        {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                        {/* <Link to="/user">Sign In</Link> */}
                        <button className="sign-in-button">{loading ?  'loading...' :'Sign In'}</button>

                        {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                        {/* <!-- <button class="sign-in-button">Sign In</button> --> */}
                        {/* <!--  -->Name */}
                    </form>


                    {<div>
                        <p className='error'>{errorLogin ? (errorLogin) : ""}</p>
                    </div>}
                </section>
            </div>
        </>
    );
};

export default SignIn;