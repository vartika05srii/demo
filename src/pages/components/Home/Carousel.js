import React from 'react';

const Carousel = () => {
  return (
    <div className="container-fluid px-0 mb-5">
      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="img/main1.jpeg" alt="Image" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-5 text-center">
                    <p className="fs-4 text-white animated zoomIn">Welcome to <strong className="text-dark">AgriTech Solutions</strong></p>
                    <h5 className="display-2 text-dark mb-4 animated zoomIn">"Empowering Agriculture for a Sustainable Tomorrow"</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="img/main2.jpg" alt="Image" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-5 text-center">
                    <p className="fs-4 text-white animated zoomIn">Welcome to <strong className="text-dark">AgriTech Solutions</strong></p>
                    <h5 className="display-2 text-dark mb-4 animated zoomIn">"Revolutionizing Agriculture, One Innovation at a Time"</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
