import React from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import Carousel from './Carousel'; // Assuming you have a Carousel component
import About from './About section.js'; // Assuming you have an AboutSection component
import Article from './Article section.js'; // Assuming you have an ArticleSection component
import Video from './Video section.js'; // Assuming you have a VideoSection component
import Testimonials from './Testimonials'; // Assuming you have a Testimonials component
import Contact from './Contact section.js'; // Assuming you have a ContactSection component
import Footer from './Footer'; // Assuming you have a Footer component
import Copyright from './Copyright'; // Assuming you have a Copyright component
import Spinner from './Spinner'; // Assuming you have a Spinner component

const HomePageLayout = () => {
  return (
    <div className="home">
        <div class="site-wrap">
        <Spinner />
      <Navbar />
      <Carousel />
      <About />
      <Article />
      <Video />
      <Testimonials />
      <Contact />
      <Footer />
      <Copyright />
      </div>
    </div>
  );
};

export default HomePageLayout;
