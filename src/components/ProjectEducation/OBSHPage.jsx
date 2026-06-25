import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import obsg1 from "../../assets/image/OBSG1.png";
import obsg2 from "../../assets/image/OBSG2.png";
import obsg3 from "../../assets/image/OBSG3.png";
import obsg4 from "../../assets/image/OBSG4.png";
import obsg5 from "../../assets/image/OBSG5.png";
import obsg6 from "../../assets/image/OBSG6.png";
import obsg7 from "../../assets/image/OBSG7.png";
import obsg8 from "../../assets/image/OBSG8.png";
import { NavBarItem, NavReturn } from "../../helper";

function OBSHPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <NavReturn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>

      {/* HERO */}
      <section className="home" id="obsh">
        <div className="home-content">
          <h1>OBSH WEBSITE</h1>
          <h4>Providing K-pop products from Big Hit company.</h4>
        </div>

        <div className="about-img">
          <img src={obsg1} alt="OBSH" />
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="example-page" id="obsh-examples">
        <h1>
          WEBSITE PAGE <span>EXAMPLES</span>
        </h1>
        <p className="ep-subtitle">
          A walkthrough of key pages in the OBSH platform
        </p>

        {/* AUTH */}
        <div className="ep-group">
          <div className="ep-group-header">
            <span className="ep-badge badge-example">Auth</span>
            <span className="ep-line" />
          </div>

          <div className="ep-grid grid-2">
            {[
              { num: "01", src: obsg2, label: "Login Page" },
              { num: "02", src: obsg3, label: "Register Page" },
            ].map((item) => (
              <div className="ep-card" key={item.num}>
                <span className="ep-card-num">{item.num}</span>
                <div className="ep-img-wrap">
                  <img src={item.src} alt={item.label} />
                </div>
                <div className="ep-card-footer">
                  <span className="ep-card-label">{item.label}</span>
                  <span className="ep-card-icon">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SHOPPING */}
        <div className="ep-group">
          <div className="ep-group-header">
            <span className="ep-badge badge-example">Shopping</span>
            <span className="ep-line" />
          </div>

          <div className="ep-grid grid-3">
            {[
              { num: "03", src: obsg4, label: "Brand Page" },
              { num: "04", src: obsg5, label: "Products Page" },
              { num: "05", src: obsg6, label: "Price Page" },
            ].map((item) => (
              <div className="ep-card" key={item.num}>
                <span className="ep-card-num">{item.num}</span>
                <div className="ep-img-wrap">
                  <img src={item.src} alt={item.label} />
                </div>
                <div className="ep-card-footer">
                  <span className="ep-card-label">{item.label}</span>
                  <span className="ep-card-icon">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PAYMENT */}
        <div className="ep-group">
          <div className="ep-group-header">
            <span className="ep-badge badge-example">Payment</span>
            <span className="ep-line" />
          </div>

          <div className="ep-grid grid-2">
            {[
              { num: "06", src: obsg7, label: "Bank Page" },
              { num: "07", src: obsg8, label: "Paid Page" },
            ].map((item) => (
              <div className="ep-card" key={item.num}>
                <span className="ep-card-num">{item.num}</span>
                <div className="ep-img-wrap">
                  <img src={item.src} alt={item.label} />
                </div>
                <div className="ep-card-footer">
                  <span className="ep-card-label">{item.label}</span>
                  <span className="ep-card-icon">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="services" id="obsh-tools">
        <h2 className="heading">
          Project <span>Tools</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python"
              className="skill-logo"
            />
            <h3>Python</h3>
            <p>
              Python is a popular, versatile programming language known for its
              simplicity and readability.
            </p>
          </div>

          <div className="services-box">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
              alt="SQL"
              className="skill-logo"
            />
            <h3>SQL</h3>
            <p>
              SQL is a language used for managing and querying relational
              databases.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <NavBarItem item="#obsh" />
    </>
  );
}

export default OBSHPage;
