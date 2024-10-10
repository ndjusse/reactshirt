// import React, { useState } from 'react';
// import Slider from "react-slick";
// import DataPolos from '../DataPolos'; // Ajustez le chemin si nécessaire
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import correct
// import './PagePolos.css';

// const ImageCarouselPolo = () => {
//     const [sliderRef, setSliderRef] = useState(null);
    
//     const sliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1
       
//     };

//     return (
//         <div className="carousel-container">
//             <button  className='btnSlick' onClick={sliderRef?.slickPrev}>
//                 <FaChevronLeft />
//             </button>
//             <button  className='btnSlick' onClick={sliderRef?.slickNext}>
//                 <FaChevronRight />
//             </button>
//             <Slider ref={setSliderRef} {...sliderSettings}>
//                 {DataPolos.map(item => (
//                     <div key={item.id} className="carousel-item">
//                         <img src={item.img} alt={item.title} className="carousel-image" />
//                         <h3>{item.title}</h3>
//                         <p>{item.desc}</p>
//                         <p>{item.price} FCFA</p>
//                         <button className='btnBuy'>Buy Now</button>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default ImageCarouselPolo;