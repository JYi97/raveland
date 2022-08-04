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
        <form className="login-form-page" onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => (
                    <li className="login-form-errors" key={idx}>{error}</li>
                ))}
            </ul>
            <div>
                <label>
                    Please enter your Username or Email:
                    <input
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>

                <label>
                    Please enter your password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
            </div>

            <button  type="submit">Log In</button>
            <div>
                <button type="submit"
                    onClick={demoUser}
                >
                    Try as a demo user
                </button>
            </div>
        </form>
    );
}

export default LoginForm;
