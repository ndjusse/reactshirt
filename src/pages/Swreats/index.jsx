import React from 'react'
import { NavLink } from 'react-router-dom';
import DataSwreats from './DataSwreats';
import "../Polos/PagePolos/PagePolos.css"



const Swreats = () => {

    const cardItem = (item) => {
        return (
            <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
                <img src={item.img} class="card-img-top  card-img-hover" alt={item.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="lead">${item.price}</p>
                    <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
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
    )
}

export default Swreats
