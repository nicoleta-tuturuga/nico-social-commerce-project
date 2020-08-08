import React from 'react';

import classes from "./LogIn.css";

const signUp = (props) => {

    return(
        <div>
            <div className="loginForm signup-form">
                <div className="sign-title">
                <h2>
                        SIGN UP
                    </h2>
                    <h3>
                        Create a NEW account
                    </h3>
                </div>
                    <div>
                    <form className="signup-form">
                    <fieldset>
                        <div className="input-field">
                            <label for="FirstName">
                                First Name 
                            </label>
                            <input 
                            maxlength="30"
                            required="required"
                            id="FirstName"
                            name="FirstName"
                            type="text">
                            </input>
                        </div>

                        <div className="input-field">
                            <label for="LastName">
                                Last Name 
                            </label>
                            <input 
                            maxlength="30"
                            required="required"
                            id="LastName"
                            name="LastName"
                            type="text">
                            </input>
                        </div>

                        <div className="input-field">
                            <label for="UserName">
                                UserName 
                            </label>
                            <input
                            maxlength="10" 
                            required="required"
                            id="UserName"
                            name="UserName"
                            type="text">
                            </input>
                        </div>

                        <div className="input-field">
                            <label for="EmailAdress">
                                Email
                            </label>
                            <input
                            required="required"
                            id="EmailAdress"
                            name="EmailAdress"
                            type="email">
                            </input>
                        </div>

                        <div className="input-field">
                            <label for="Password">
                                Password (min 5 characters)
                            </label>
                            <input 
                            minlength="5"
                            maxlength="10"
                            required="required"
                            id="Password"
                            name="Password"
                            type="password">
                            </input>
                        </div>

                        <div className="input-field">
                            <label for="confirm-Password">
                                Confirm Password
                                {/* password validation with javascript */}
                            </label>
                            <input 
                            minlength="5"
                            maxlength="10"
                            required="required"
                            id="Password"
                            name="Password"
                            type="password">
                            </input>
                        </div>

                        <div className="input-field gender-field">
                            <label for="gender">
                                Gender
                            </label> 
                            <ul className="gender-radio-list">
                            <li>
                                <input 
                                required
                                id="maleGender"
                                name="Gender"
                                type="radio"
                                value="Male"/>
                                    <label for="maleGender">
                                        Male
                                    </label>
                            </li>
                            <li>
                                <input 
                                required
                                id="femaleGender"
                                name="Gender"
                                type="radio"
                                value="Female"/>
                                    <label for="femaleGender">
                                        Female
                                    </label>
                            </li>
                        </ul>
                        </div>

                        <div className="input-field date-of-birth">
                            <label for="date-of-birth">
                                Date of birth
                            </label>

                            <input
                            type="date"
                            name="dateOfBirth"/>
                        </div>

                        <div className="input-field checkbox-field">
                            <label>
                            Select your interests and we'll update you via email.
                            </label>
                            <ul className="checkbox-marketing-field">
                                <li>
                                    <input className="marketing-newsletter"
                                    type="radio"
                                    name="marketing-newsletter"
                                    required/>
                                    <label for="NewProductMarketing">
                                        New In
                                    </label>
                                </li>
                                <li>
                                <input className="marketing-newsletter"
                                    type="radio"
                                    name="marketing-newsletter"
                                    required/>
                                    <label for="SalesProductMarketing">
                                        Discounts & Sales 
                                    </label>
                                </li>
                                <li>
                                <input className="marketing-newsletter"
                                    type="radio"
                                    name="marketing-newsletter"
                                    required/>
                                    <label for="BoutiquesMarketing">
                                        Boutique News 
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="signup-terms">
                        <input className="signButton signup-button"
                        type="submit"
                        value="SIGN UP"/>

                        <span className="terms-of-service">
                        By clicking on Sign up you are agreeing to the 
                            <a className="terms" href="#">
                                 Terms of Service.
                            </a>
                        </span>
                        </div>

                    </fieldset>
                    </form>
                    </div>
                </div>
        </div>
    );
};

export default signUp;