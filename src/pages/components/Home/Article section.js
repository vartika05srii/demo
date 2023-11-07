import React from 'react';

const Article = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <br /><br /><br /> <img className="img-fluid" src="img/artilce2.v1.jpg" alt="" />
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="section-title">
              <p className="fs-5 fw-medium fst-italic text-primary">Featured Acticle</p>
              <h1 className="display-6">Transforming Indian Agriculture: The AgriTech Revolution</h1>
            </div>
            <p className="mb-4 article-content">The AgriTech Solution is a groundbreaking initiative poised to revolutionize Indian agriculture. It addresses critical challenges faced by farmers with a multifaceted approach. Approximately 49% of farmers lack access to institutional credit, leading to a heavy reliance on informal sources. This results in exorbitant interest rates, often exceeding 20% annually. The solution bridges this gap, providing a financial inclusion gateway that connects farmers with investors.

            Accessibility is vastly improved, as brick-and-mortar branches are often distant from rural areas. By streamlining processes and offering standardized financial solutions, the platform ensures efficiency and transparency. It covers a wide array of agricultural needs, including tractors, solar pumps, allied farm equipment, and custom manufacturing solutions.</p>
            <p className="mb-4 article-content">Technologically, the platform is robust, leveraging Java and Oracle/Microsoft SQL databases to ensure security, scalability, and performance. The system maintains a meticulous record of transactions, from customer details to loan specifics and collateral documentation. It facilitates seamless communication between originators and investors, effectively transforming the financial landscape of Indian agriculture.

            By fostering innovation, environmental sustainability, and community collaboration, the AgriTech Solution represents a pivotal step towards a more prosperous and ecologically responsible agricultural sector. This initiative not only uplifts farmers but also contributes to the broader goal of strengthening the backbone of India's economy. It stands as a testament to the potential of technology-driven solutions in addressing longstanding challenges in the agricultural sector.</p>
            <a href="#" className="btn btn-primary rounded-pill py-3 px-5 read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
