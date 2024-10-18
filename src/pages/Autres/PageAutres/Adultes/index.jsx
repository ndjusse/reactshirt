import React from 'react'
import { NavLink } from 'react-router-dom';
import DataAdultes from './DataAdultes';




const Adultes = () => {

    const cardItem = (item) => {
        return (
            <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>

                {item.isNew && (
                    <span className="badge bg-danger position-absolute" style={{ top: '10px', left: '10px' }}>
                        NEW
                    </span>
                )}
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="lead">{item.price}F</p>
                    <NavLink to={`/products/{item.id}F`} className="btn btn-outline-primary">Buy Now</NavLink>
                </div>
            </div>
        );
    }

    return (
        <div className="Adultes" id="Adultes">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>ARTICLE POUR ADULTES</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {DataAdultes.map(cardItem)}
                </div>
            </div>
        </div>
    )
}

export default Adultes;
