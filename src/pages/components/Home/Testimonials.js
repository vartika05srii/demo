import React from 'react';

const Testimonials = () => {
  return (
    <div className="container-fluid testimonial py-5 my-5">
      <div className="container py-5">
        <div className="section-title text-center mx-auto">
          <p className="fs-5 fw-medium fst-italic text-white">Testimonial</p>
          <h1 className="display-6">What our clients say about our FinTech</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          <div className="testimonial-item p-4 p-lg-5">
            <p className="mb-4">
              "The AgriTech Solution has been a game-changer for us. It's simplified the loan application process, and the competitive interest rates have lightened our financial burden. This platform has truly made a positive impact on our farming journey."
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <div className="text-start ms-3">
                <h5>ABC</h5>
                <span className="text-primary">Farmer</span>
              </div>
            </div>
          </div>
          <div className="testimonial-item p-4 p-lg-5">
            <p className="mb-4">
              "As a small-scale farmer, accessing credit was always a challenge. The AgriTech Solution provided us with a seamless way to secure loans for essential equipment. The ease of use and responsive support team make it a standout platform."
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <div className="text-start ms-3">
                <h5>XYZ</h5>
                <span className="text-primary">Farmer</span>
              </div>
            </div>
          </div>
          <div className="testimonial-item p-4 p-lg-5">
            <p className="mb-4">
              "The AgriTech Solution doesn't just provide financial assistance; it offers invaluable insights and connections within the farming community. This platform has become an essential tool in our agricultural pursuits."
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <div className="text-start ms-3">
                <h5>123</h5>
                <span className="text-primary">Farmer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
