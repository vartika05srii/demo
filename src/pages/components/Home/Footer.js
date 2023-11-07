import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark footer mt-5 py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-primary mb-4">Our Office</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>Mumbai, Maharashtra</p>
            <p className="mb-2"><i className="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</p>
            <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>info@gmail.com</p>
            <div className="d-flex pt-3">
              <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
              <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-youtube"></i></a>
              <a className="btn btn-square btn-primary rounded-circle me-2" href=""><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-primary mb-4">Quick Links</h4>
            <a className="btn btn-link" href="/about">About Us</a>
            <a className="btn btn-link" href="contact.html">Contact Us</a>
            <a className="btn btn-link" href="feature.html">Our Services</a>
            <a className="btn btn-link" href="terms&condition.html">Terms & Condition</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-primary mb-4">Business Hours</h4>
            <p className="mb-1">Monday - Friday</p>
            <h6 className="text-light">09:00 am - 07:00 pm</h6>
            <p className="mb-1">Saturday            </p>
            <h6 className="text-light">09:00 am - 12:00 pm</h6>
            <p className="mb-1">Sunday</p>
            <h6 className="text-light">Closed</h6>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-primary mb-4">Newsletter</h4>
            <p>Stay in the loop with our latest updates, news, and innovations. Sign up for our newsletter to receive regular insights on the agricultural technology industry, product launches, and more.</p>
            <div className="position-relative w-100">
              <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

