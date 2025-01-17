import React from 'react'
import { NavLink } from 'react-router-dom';

import DataEnfants from './DataEnfants';




const Enfants = () => {

    const cardItem = (item) => {
        return (
            <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="lead">{item.price}FCFA</p>
                    <NavLink to={`/products/{item.id}FCFA`} className="btn btn-outline-primary">Buy Now</NavLink>
                </div>
            </div>
        );
    }

    return (
        <div className="Enfants" id="Enfants">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>ARTICLE POUR ENFANT</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {DataEnfants.map(cardItem)}
                </div>
            </div>
        </div>
    )
}

export default Enfants;
