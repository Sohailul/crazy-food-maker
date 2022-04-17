import React from 'react';
import './Header.css';
import {RiLogoutBoxRFill} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
        return (
            <header>
                <nav className="container navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand fs-3" to="/">Crazy Food Maker</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
                                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/">Home</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/blogs">Blogs</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/about">About</NavLink>
                                {
                                    user ?
                                        <button onClick={handleSignOut} className="btn btn-link text-decoration-none text-dark fs-5">Log Out&nbsp;<RiLogoutBoxRFill /></button>
                                        :
                                        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/login">Login</NavLink>
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    };

export default Header;