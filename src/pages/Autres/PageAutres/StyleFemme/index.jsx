import React from 'react'
import { NavLink } from 'react-router-dom';

import "../../../Polos/PagePolos/PagePolos.css"
import DataStyleFemme from './DataStyleFemme';



const StyleFemme = () => {

    const cardItem = (item) => {
        return (
            <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>

                {item.isNew && (
                    <span className="badge bg-danger position-absolute" style={{ top: '10px', left: '10px' }}>
                        NEW
                    </span>
                )}
                <img src={item.img} class="card-img-top  card-img-hover" alt={item.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="lead">{item.price}FCFA</p>
                    <NavLink to={`/products/{item.id}FCFA`} className="btn btn-outline-primary">Buy Now</NavLink>
                </div>
            </div>
        );
    }

    return (
        <div className="StyleFemme" id="StyleFemme">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>STYLES FEMMES EN MODE</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {DataStyleFemme.map(cardItem)}
                </div>
            </div>
        </div>
    )
}

export default StyleFemme
