import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <NavLink className={"new-rave-navlink"} to="/raves/new">New Rave</NavLink>
                <ProfileButton className={'profile-button-navlink'} user={sessionUser} />
            </>
        );
    } else {
        sessionLinks = (
            <>
                <NavLink className={"sign-up-navlink"} to="/signup">Sign Up</NavLink>
                <LoginFormModal />
            </>
        );
    }

    return (
        <>
            <div className='nav-bar'>
                <ul className='nav-bar-ul'>
                    <li className='nav-ul-li'>
                        <NavLink className={"home-navlink"} exact to="/">Home</NavLink>
                        <NavLink className={"all-raves-navlink"} exact to="/raves">All Raves</NavLink>
                        {isLoaded && sessionLinks}
                    </li>
                </ul>
            </div>
        </>

    );
}

export default Navigation;
