import { useState, useEffect } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { signInFailure, signInStart, signInSucces, signInToken } from '../../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import './signin.scss';
import { signInUser } from '../../services/api';


const SignIn = () => {
    const [formData, setFormData] = useState({});
    const { error } = useSelector((state) => state.user)
    const [loading, setLoading] = useState(false)
    const [rememberMe, setRememberMe] = useState(false);
    const [errorLogin, setErrorLogin] = useState()

    const navigate = useNavigate();
    const dispatch = useDispatch();
   

    useEffect(() => {
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
            localStorage.setItem('rememberedEmail', formData.email);
            localStorage.setItem('rememberedPassword', formData.password);
        } else {
            localStorage.removeItem('rememberedEmail');
            localStorage.removeItem('rememberedPassword');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            dispatch(signInStart())
            setLoading(true)
            const data = await signInUser(formData);

            if (data.status === 400) {
                dispatch(signInFailure(data.message))
                setErrorLogin(data.message);
                return
            } else {
                dispatch(signInToken(data.body.token))
                if (formData.rememberMe) {
                    localStorage.setItem('rememberedEmail', formData.email);
                    localStorage.setItem('rememberedPassword', formData.password);
                }
            }
            navigate('/user')
            dispatch(signInSucces(data))

        } catch (error) {
            dispatch(signInFailure(error.message))
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

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
                        <button className="sign-in-button">{loading ? 'loading...' : 'Sign In'}</button>
                    </form>

                    <div>
                        <p className='errorLogin'>{errorLogin ? error : ""}</p >
                    </div>
                </section>
            </div>
        </>
    );
};

export default SignIn;