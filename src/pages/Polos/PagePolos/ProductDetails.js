// import React from 'react';
// import { useParams } from 'react-router-dom';
// import DataPolos from '../DataPolos';
// const ProductDetails = () => {
//     const { id } = useParams(); // Récupérer l'ID de l'article à partir des paramètres d'URL
//     const product = DataPolos.find(item => item.id === parseInt(id)); // Trouver le produit correspondant

//     if (!product) {
//         return <div>Produit non trouvé</div>; // Gérer le cas où le produit n'existe pas
//     }

//     return (
//         <div className="container py-5">
//             <h1>{product.title}</h1>
//             <img src={product.img} alt={product.title} className="img-fluid" />
//             <p>{product.desc}</p>
//             <p><strong>Prix : {product.price} FCFA</strong></p>
//             <button className="btn btn-primary">Acheter maintenant</button>
//         </div>
//     );
// };

// export default ProductDetails;