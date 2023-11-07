import React from 'react';

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6"><br /><br />
            <div className="row g-3">
              <div className="col-6 text-end">
                <img className="img-fluid bg-white w-100 mb-3 wow fadeIn" data-wow-delay="0.1s" src="img/about1.jpeg" alt="" /><br /><br />
                <img className="img-fluid bg-white w-60 mb-4 wow fadeIn" data-wow-delay="0.2s" src="img/aboutt3.jpg" alt="" />
              </div>
              <div className="col-6">
                <img className="img-fluid bg-white w-50 mb-3 wow fadeIn" data-wow-delay="0.3s" src="img/about5.jpg" alt="" />
                <img className="img-fluid bg-white w-100 wow fadeIn" data-wow-delay="0.4s" src="img/about6.jpg" alt="" />
              </div><br /><br /><br /><br />
              <h5>Our Commitment
              </h5>
              <p className="mb-0"><b>Innovation:</b> Our dedication to innovation drives us to lead the charge in adopting cutting-edge technology.We take pride in providing state-of-the-art solutions meticulously crafted to suit the distinctive needs of each of our valued clients.<br /><br />
                <b> Sustainability:</b> Environmental stewardship is deeply ingrained in our ethos. We are unwavering in our efforts to implement practices that not only boost productivity but also uphold the ecological balance, ensuring a sustainable future for all.<br /><br />
                <b>Community:</b>We firmly believe in the strength of community. Our solutions are purposefully designed to cultivate collaboration, facilitate the exchange of knowledge, and spur economic growth within the agricultural sector. Together, we aim to foster a thriving and supportive agricultural community that stands united for progress.</p>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="section-title">
              <p className="fs-5 fw-medium fst-italic text-primary">About Us</p>
              <h3 className="display-10">Welcome to AgriTech Solution, where innovation meets agriculture for a sustainable future. We are a team of passionate individuals dedicated to transforming the agricultural landscape through cutting-edge technology and data-driven solutions.</h3>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-sm-4">
                <img className="img-fluid bg-white w-100" src="img/about4.jpeg" alt="" />
              </div>
              <div className="col-sm-8">
                <h5>Our Mission
                </h5>
                <p className="mb-0">At AgriTech Solution, we aim to empower farmers, agribusinesses, and agricultural communities with the tools they need to thrive in an ever-evolving industry. Our mission is to revolutionize agriculture by harnessing the power of technology, optimizing resources, and fostering environmental stewardship.</p>
              </div>
            </div>
            <div className="border-top mb-4"></div>
            <div className="row g-3">
              <div className="col-sm-8">
                <h5>What Drives Us</h5>
                <p className="mb-0">We believe that the key to a prosperous agricultural sector lies in innovation and collaboration. With a deep respect for tradition and an eye on the future, we work tirelessly to bridge the gap between traditional farming practices and the latest advancements in agri-tech.</p>
              </div>
              <div className="col-sm-4">
                <img className="img-fluid bg-white w-100" src="img/about7.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
