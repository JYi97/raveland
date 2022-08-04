import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    const demoUser = (e) => {
        e.preventDefault();
        setErrors([])
        return dispatch(sessionActions.login({ credential: "demo@user.io", password: "password" })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors)
            }
        )
    }

    return (
        <>
        <div className="login-form-modal-form-container">
        <form className="login-form-page" onSubmit={handleSubmit}>
            <div className="login-form-modal-welcome-title">
            Welcome Back!
            </div>
            <ul>
                {errors.map((error, idx) => (
                    <li className="login-form-errors" key={idx}>{error}</li>
                ))}
            </ul>
            <div>
                <input
                className="login-form-modal-username-email-input-field"
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                    placeholder="Username / Email"
                />
            </div>
            <div>
                <input
                 className="login-form-modal-password-input-field"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                />
            </div>
            <button className="login-form-modal-login-button" type="submit">Log In</button>
            <div>
                <button className="login-form-modal-demo-button" type="submit"
                    onClick={demoUser}
                >
                    Try as a demo user
                </button>
            </div>
        </form>
        </div>
        </>
    );
}

export default LoginForm;
