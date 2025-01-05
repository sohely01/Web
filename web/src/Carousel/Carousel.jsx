import React from 'react';
import First from '../assets/img/carousel1.jpg';
import Second from '../assets/img/carousel2.jpg';
import Third from '../assets/img/carousel3.jpg';

const Carousel = () => {
  return (
    <div>
              <div className="container">

                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={First} alt="Los Angeles" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={Second} alt="Chicago" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={Third} alt="New York" className="d-block w-100" />
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


              </div>
      
    </div>
  );
};

export default Carousel;
