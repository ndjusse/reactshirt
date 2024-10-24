import React from 'react';
import { NavLink } from 'react-router-dom';
import DataSwreats from './DataSwreats';
import "../Polos/PagePolos/PagePolos.css";

const Swreats = () => {
    const cardItem = (item) => {
        return (
            <div className="col-6 col-sm-4 col-md-3 my-2" key={item.id}>
                <div className="card py-4">
                    {item.isNew && (
                        <span className="badge bg-danger position-absolute" style={{ top: '10px', left: '10px' }}>
                            NEW
                        </span>
                    )}
                    <img src={item.img} className="card-img-top card-img-hover" alt={item.title} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="lead">{item.price} FCFA</p>
                        <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>SWEATS</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {DataSwreats.map(cardItem)}
                </div>
            </div>
        </div>
    );
}

export default Swreats;