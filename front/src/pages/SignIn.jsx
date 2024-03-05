// import React from 'react';

import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <>
        <div className="main bg-dark body">
            <section className="sign-in-content">
                {/* <i className="fa fa-user-circle sign-in-icon"></i> */}
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label>Username
                            <input type="text" id="username" /></label>
                    </div>
                    <div className="input-wrapper">
                        <label>Password
                            <input type="password" id="password" /></label>
                    </div>
                    <div className="input-remember">
                        <label><input type="checkbox" id="remember-me" />
                            Remember me</label>

                    </div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    <Link to="/user" className="sign-in-button">Sign In</Link>

                    {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                    {/* <!-- <button class="sign-in-button">Sign In</button> --> */}
                    {/* <!--  -->Name */}
                </form>
            </section>
        </div>
        </>
    );
};

export default SignIn;