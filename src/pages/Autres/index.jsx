import React from 'react'
import { Link } from 'react-router-dom'
import NavAutres from './NavAutres'
import './Autres.css';
import Adultes from './PageAutres/Adultes';
import Enfants from './PageAutres/Enfants';

const Autres = () => {
    return (
        <div>
            <div className=" image text-secondary px-4 py-5 text-center" id='home'>
                <div className="py-5">
                    <h1 className="display-5 fw-bold ">Découvrez notre collection</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4 text-dark">Quickly design </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

                            {/* <button type="button" className="btn btn-outline-light btn-lg px-4">Secondary</button> */}
                            <Link to='/course'><button type="button" className="btn btn-info btn-lg px-4 me-sm-3 fw-bold">Course</button></Link>
                            <Link to='/about'><button type="button" className="btn btn-light btn-lg px-4">Read More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <NavAutres />
            <Adultes />
            <Enfants />
        </div>
    )
}

export default Autres