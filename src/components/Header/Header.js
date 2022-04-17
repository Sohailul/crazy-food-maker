import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/login">Login</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;