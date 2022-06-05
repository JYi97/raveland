import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from "react-router-dom";

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory()
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push("/")
    };

    return (
        <>
            <button onClick={openMenu}>
                <i class="fa-solid fa-id-card"></i>
            </button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li className="profile-username">{user.username}</li>
                    <li className="profile-email">{user.email}</li>
                    <li className="profile-notyou">
                        Not your account?
                        <button onClick={logout}>Log Out</button>
                    </li>
                </ul>
            )}
        </>
    );
}

export default ProfileButton;
