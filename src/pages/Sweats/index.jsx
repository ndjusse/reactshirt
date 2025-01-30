import React from 'react';
import {  useNavigate } from 'react-router-dom';
import DataSweats from './DataSweats';
import PaymentComponent from '../../PaymentComponent';

const Sweats = () => {
    const navigate = useNavigate();

    const handleShow = (id) => {
        navigate(`/products/${id}`);
    };





    const handleBuyNow = async (id) => {
        // Récupérer les informations du produit (prix, etc.)
        const product = DataSweats.find(item => item.id === id);
        const amount = product.price;
        const transactionId = `transaction-${id}`;

        try {
            // Appeler l'API de paiement
            const response = await fetch('http://localhost:3001/api/pay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount, transactionId }),
            });

            const data = await response.json();
            console.log(data);

            // Rediriger vers la page de paiement ou afficher un message de confirmation
            
        } catch (error) {
            console.error('Erreur lors du paiement:', error);
        }
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
                                
                                <button className="btn btn-outline-primary" onClick={() => handleBuyNow(item.id)}><PaymentComponent /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sweats;
