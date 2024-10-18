import React, { useState } from 'react';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import DataPolos from '../DataPolos';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './PagePolos.css';

const PagePolos = () => {
    const [sliderRef, setSliderRef] = useState(null);

    // Configuration des paramètres du slider
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Pour les écrans plus petits que 1024px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Pour les écrans plus petits que 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // Pour les écrans plus petits que 480px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="carousel-container">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>POLOS Disponible</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div>
                <button className='btnSlick' onClick={sliderRef?.slickPrev}>
                    <FaChevronLeft />
                </button>
                <button className='btnSlick' onClick={sliderRef?.slickNext}>
                    <FaChevronRight />
                </button>
                <Slider ref={setSliderRef} {...sliderSettings}>
                    {DataPolos.map(item => (
                        <div key={item.id} className="card mx-2"> {/* Ajout d'un espacement horizontal */}
                           {item.isNew && (
            <span className="badge bg-danger position-absolute" style={{ top: '10px', left: '10px' }}>
                NEW
            </span>
        )}
                            <img src={item.img} className="card-img-hover carousel-image" alt={item.title} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="lead">{item.price} FCFA</p>
                                <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default PagePolos;