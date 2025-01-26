import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import DataSweats from './DataSweats';

const Sweats = () => {
    const navigate = useNavigate();

    const handleShow = (id) => {
        navigate(`/products/${id}`);
    };

    return (
        <div className="container py-5">
            <h1>SWEATS</h1>
            <div className="row">
                {DataSweats.map(item => (
                    <div className="col-6 col-sm-4 col-md-3 my-2" key={item.id}>
                        <div className="card py-4">
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                className="card-img-top" 
                                onClick={() => handleShow(item.id)} 
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="lead">{item.price} FCFA</p>
                                <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sweats;
