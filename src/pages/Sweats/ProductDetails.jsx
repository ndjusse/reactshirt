import React from 'react';
import { useParams } from 'react-router-dom';
import DataSweats from './DataSweats'; 

const ProductDetails = () => {
    const { id } = useParams();
    const product = DataSweats.find(item => item.id === parseInt(id));

    if (!product) {
        return <div>Produit non trouvé</div>;
    }

    return (
        <div className="container py-5">
            <h1 className="text-center">{product.title}</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src={product.img} alt={product.title} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h3>Description</h3>
                    <p>{product.desc}</p>
                    <p><strong>Prix: {product.price} FCFA</strong></p>

                    {/* Section pour afficher les autres images  */}
                    <h4>Autres Images</h4>
                    <div className="d-flex flex-wrap">
                        {product.otherImages.map((img, index) => (
                            <div className="me-2 mb-2" key={index} style={{ width: '100px' }}>
                                <img 
                                    src={img} 
                                    alt={`Detail ${index}`} 
                                    className="img-fluid" 
                                    style={{ maxHeight: '100px', objectFit: 'cover' }} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
