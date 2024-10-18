import React from 'react'
import { Nav } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

const NavAutres = () => {
    return (
        <Nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
                        <li className="nav-item">
                            <Nav.Link  href="#Adultes" className="nav-link active" aria-current="page"  >Adultes</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link href="#Enfants" className="nav-link" >Enfants</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link href="#StyleFemme" className="nav-link" >Style femmes</Nav.Link>
                        </li>
                        


                    </ul>
                   
                </div>
            </div>
        </Nav>
    )
}

export default NavAutres