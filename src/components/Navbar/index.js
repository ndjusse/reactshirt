import React from 'react';
import { NavLink } from 'react-router-dom';
import logonnn from '../../LOGO/logonnn.jpg';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src={logonnn} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
                </NavLink>
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
                            <NavLink className={({ isActive }) => "nav-link " + (isActive ? "active" : "")} to="/Autres">Autres services</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex gap-2" role="search">
                        <button className="btn btn-info" type="submit">Login</button>
                        <NavLink to="/signup"><button className="btn btn-success" type="submit">Signup</button></NavLink>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;