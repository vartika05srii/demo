import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container-fluid bg-white sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
          <Link to="/" className="navbar-brand">
            <h1 className="logo"><Link to="/">AgriTech Solutions</Link></h1>
          </Link>
          <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-item nav-link active">Home</Link>
              <Link to="/about" className="nav-item nav-link">About</Link>
              <div className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Favorable Ascpect</Link>
                <div className="dropdown-menu bg-light rounded-0 m-0">
                  <Link to="/features" className="dropdown-item">Features</Link>
                  <Link to="/blog" className="dropdown-item">Blog Article</Link>
                  <Link to="/404" className="dropdown-item">404 Page</Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link">Contact</Link>
              <Link to="/login" className="nav-item nav-link">Login/Register</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
