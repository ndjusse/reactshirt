import React from 'react'
import PagePolos from '../Polos/PagePolos'
import './Home.css';


import Swreats from '../Swreats';
import { Carousel } from 'react-bootstrap';




const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item className='carousel-item1 vh-100' >
                    <Carousel.Caption className='h-100 d-flex flex-column align-items-center justify-content-top'>
                        <div className="row h-100">
                            <div className='col-lg-6 d-flex flex-column align-items-start justify-content-center'>
                                <h1 className='text-capitalize text-start'> Découvrez notre collection unique de t-shirts en coton doux.</h1>
                                <p className='text-start'>qualité  incroyable et  design est unique.</p>

                            </div>
                            <div className='col-lg-6 d-none d-lg-block'></div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='carousel-item2 vh-100'>
                    <Carousel.Caption className='h-100'>
                        <div className="row h-100">
                            <div className='col-lg-6 d-flex flex-column align-items-start justify-content-center'>
                                <h1 className='text-capitalize text-start'>Créez votre propre style avec notre option de t-shirt</h1>
                                <p className='text-start'>Explorez nos designs originaux et trouvez le t-shirt parfait qui reflète votre personnalité</p>

                            </div>
                            <div className='col-lg-6 d-none d-lg-block'></div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='carousel-item3 vh-100 '>
                    <Carousel.Caption className='h-100'>
                        <div className="row h-100">
                            <div className='col-lg-6 d-none d-lg-block'></div>
                            <div className='col-lg-6 d-flex flex-column align-items-end justify-content-center'>
                                <h1 className='text-capitalize text-start'>Disponible dans une variété de couleurs </h1>
                                <p className='text-start'>    Fabriqué en coton biologique</p>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='carousel-item4 vh-100 '>
                    <Carousel.Caption className='h-100'>
                        <div className="row h-100">
                            <div className='col-lg-6 d-none d-lg-block'></div>
                            <div className='col-lg-6 d-flex flex-column align-items-end justify-content-center'>
                                <h1 className='text-capitalize text-start'>Livraison gratuite dans Yaoundé</h1>
                                <p className='text-start'>Découvrez notre collection dès maintenant et trouvez le t-shirt qui vous représente le mieux !</p>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <PagePolos />
            <Swreats />



            <div className="container py-5">
                <div className="row align-items-center g-5">
                    <div className="col-12 col-md-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Exprimez-vous avec style</h1>
                        <p className="lead">
                            Chez nous, nous croyons que chaque t-shirt raconte une histoire. Notre mission est de fournir des vêtements qui permettent à chacun d'exprimer son style unique. Nous utilisons des matériaux durables et travaillons avec des artistes locaux pour créer des designs originaux.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact us</button>
                            {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">More</button> */}
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1727443897692-86915645a7b0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="aboutImg"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
