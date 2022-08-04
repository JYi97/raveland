import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import * as sessionActions from '../../store/session';
import NaviLogo from '../../images/RaveLand-logos_white.png'
import './Navigation.css';

function Navigation({ isLoaded }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory()

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push("/")
    };

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <NavLink className={"new-rave-navlink"} to="/raves/new">New Rave</NavLink>
                <button className="nav-bar-log-out-button" onClick={logout}>Log Out</button>
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
                        <img className='nav-bar-logo-container' src={NaviLogo} alt=''></img>
                        {isLoaded && sessionLinks}
                    </li>
                </ul>
            </div>
        </>

    );
}

export default Navigation;
