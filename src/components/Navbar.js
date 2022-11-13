import React from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Bootstrap" width="40" height="30" />
                </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/skills">Skills</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/projects">Projects</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;