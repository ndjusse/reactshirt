import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logonnn from '../../LOGO/logonnn.jpg';
import './Navbar.css';

const Navbar = () => {
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const screenWidth = window.innerWidth;

            if (screenWidth < 768 && scrollPosition > 250) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src={logonnn} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
                </NavLink>
                {showNav || window.innerWidth >= 768 ? (
                    <React.Fragment>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => "nav-link " + (isActive ? "active" : "")} to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => "nav-link " + (isActive ? "active" : "")} to="/Polos">Polos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => "nav-link " + (isActive ? "active" : "")} to="/Sweats">Sweats</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => "nav-link " + (isActive ? "active" : "")} to="/Autres">Styles</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex gap-2" role="search">
                                <NavLink to="/Login">
                                    <button className="btn btn-info text-white" type="button">Se connecter</button>
                                </NavLink>
                                <NavLink to="/Registre">
                                    <button className="btn btn-primary" type="button">S'inscrire</button>
                                </NavLink>
                            </form>
                        </div>
                    </React.Fragment>
                ) : null}
            </div>
        </nav>
    );
}

export default Navbar;
