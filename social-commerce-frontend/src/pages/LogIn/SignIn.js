import React from 'react';

import classes from './LogIn.css';
import SignUp from './SignUp';

const logIn = (props) => {

    return(
        <div>
            <div className="login-container">
                <div className="loginForm signin-form">
                    <div className="sign-title">
                    <h2>
                        SIGN IN
                    </h2>
                    <h3>
                        Enter in your account
                    </h3>
                    </div>
                    <form className="signin-form">
                    <fieldset>
                        <div className="input-field">
                            <label for="UserName">
                                Enter your email or username 
                            </label>
                            <input className="username-field"
                            required="required"
                            id="UserName"
                            name="UserName"
                            type="text">
                            </input>
                        </div>

                        <div className="input-field">
                            <label for="Password">
                                Enter your password 
                            </label>
                            <input className="password-field"
                            required="required"
                            id="Password"
                            name="Password"
                            type="password">
                            </input>
                        </div>

                        <input className="signButton signin-button"
                        type="submit"
                        value="SIGN IN"/>
                    </fieldset>
                    </form>
                        <a className="forgot-password" href="#">
                            Have you forgot your password?
                        </a>
                </div>

                <SignUp/>

            </div>
        </div>
    );
};

export default logIn;