import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="container navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Crazy Food Maker</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
                            <li className="nav-item">
                                <Link className={({ isActive }) => (isActive ? "active-link" : "link")} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={({ isActive }) => (isActive ? "active-link" : "link")} to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={({ isActive }) => (isActive ? "active-link" : "link")} to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;