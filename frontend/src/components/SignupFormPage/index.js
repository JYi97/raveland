import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect} from "react-router-dom";
import * as sessionActions from "../../store/session";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginFormModal/LoginForm";
import './SignupForm.css';

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [showModal, setShowModal] = useState(false);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <>
            <div className="signup-form-page-form-image-container">
                <div className="signup-form-page-form-container">
                    <div>
                        <div className="signup-page-signup-header">
                            Sign Up for Raveland
                        </div>
                        <div className="signup-page-connect-rave-intro">
                            Connect with the amazing rave community
                        </div>
                        <div className="signup-page-plur-policy-agreement">
                            By continuing, you agree to Raveland's Terms of Service
                            and acknowledge the Peace Love Unity Respect Policy
                        </div>
                    </div>
                    <form className="signup-form-page" onSubmit={handleSubmit}>
                        <ul>
                            {errors.map((error, idx) => <li className="signup-form-errors" key={idx}>{error}</li>)}
                        </ul>
                        <div>
                            <input
                                className="signup-form-email-input"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-form-username-input"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                placeholder="Username"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-form-password-input"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Password"
                            />
                        </div>
                        <div>
                            <input
                                className="signup-form-confirm-password-input"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                placeholder="Confirm Password"
                            />
                        </div>
                        <div>
                            <button className="signup-form-page-signup-button" type="submit">Sign Up</button>
                        </div>
                    </form>
                    <div className="signup-form-login-button-container">
                        Already on Raveland?
                        <button className="sign-up-form-modal-log-in-button" onClick={() => setShowModal(true)}>Log In</button>
                        {showModal && (
                            <Modal onClose={() => setShowModal(false)}>
                                <LoginForm />
                            </Modal>
                        )}
                    </div>
                </div>
                <div className="sign-up-page-image-container">
                    <img className="sign-up-page-image" src='https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/20080751/all-are-welcome-here-700x430.jpg' alt=''></img>
                </div>
            </div>
        </>
    );
}

export default SignupFormPage;
