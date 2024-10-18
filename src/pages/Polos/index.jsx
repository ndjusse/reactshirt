import React from 'react'
import PagePolos from './PagePolos'
import groupe from '../../assets/images/products/groupe.jpg'




const Polos = () => {



    return (
        <div>
             <div className="row flex-lg-row-reverse align-items-center g-5 py-5  mx-auto ">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src= {groupe} style={{ width: "90%", height:"90%" }}
                        alt="aboutImg" className='rounded shadow' />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Exprimez-vous avec style </h1>
                    <p className="lead">Chez nous, nous croyons que chaque t-shirt raconte une histoire.  notre mission est 
                        de fournir des vêtements qui permettent à chacun d'exprimer son style unique. Nous utilisons des 
                        matériaux durables et travaillons avec des artistes locaux pour créer des designs originaux.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-info btn-lg px-4 me-md-2">Contact us</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">More</button>
                    </div>
                </div>
            </div>
            
            <PagePolos />
        </div>
    )
}

export default Polos
