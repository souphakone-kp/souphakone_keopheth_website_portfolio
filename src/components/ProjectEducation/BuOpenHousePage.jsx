import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Replace these with your actual image imports
import buopenhouse2 from "../../assets/image/Buopenhouse2.png";
import buopenhouse3 from "../../assets/image/Buopenhouse3.png";
import buopenhouse4 from "../../assets/image/Buopenhouse4.png";
import buopenhouse5 from "../../assets/image/Buopenhouse5.png";
import buopenhouse6 from "../../assets/image/Buopenhouse6.png";
import buopenhouse7 from "../../assets/image/Buopenhouse7.png";
import { NavBarItem, NavReturn } from "../../helper";

function BuOpenhousePage() {
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
      <section className="home" id="bu-open-house">
        <div className="home-content">
          <h1>Mini Project Bu OpenHouse</h1>
          <h4>Design and creation website for the Bu Openhouse.</h4>
          <a
            href="https://bu-open-house-2024.onrender.com/"
            className="btn btn2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bu Openhouse Website
          </a>
        </div>

        <div className="about-img">
          <img
            style={{ width: "100%" }}
            src={buopenhouse2}
            alt="Bu Openhouse"
          />
        </div>
      </section>

      {/* ABOUT / PURPOSE */}
      <section
        className="about"
        id="about"
        style={{ background: "rgb(16, 20, 37)" }}
      >
        <div className="about-img">
          <img src={buopenhouse3} alt="Bu Openhouse Overview" />
        </div>

        <div className="about-content">
          <h2 className="heading">
            Bu OpenHouse Website <span>Purpose</span>
          </h2>
          <p>
            The design of BU OpenHouse website aims to serve as a communication
            and promotional platform for Bangkok university. This website
            provides essential information to students, parents, and interested
            individuals about the educational institution, including details on
            available courses, fields of study, and various activities held
            during the Open House event, such as campus tours, workshop
            participation, and lectures from faculty members and alumni.
          </p>
        </div>
      </section>

      {/* WEBSITE PAGE EXAMPLES */}
      <section className="example-page" id="website-example">
        <h1>
          WEBSITE <span className="highlight">EXAMPLE</span>
        </h1>

        <hr />

        <div className="ep-group">
          <div className="ep-group-header">
            <span className="ep-badge badge-example">UI Showcase</span>
            <span className="ep-line" />
          </div>

          <div className="ep-grid grid-2">
            {[
              {
                src: buopenhouse4,
                title: "Open House Activities Page",
                caption:
                  "The webpage displaying activities for the BU Open House event.",
              },
              {
                src: buopenhouse5,
                title: "Activity Schedule Page",
                caption:
                  "A list or schedule of activities that participants can join.",
              },
              {
                src: buopenhouse6,
                title: "Navigation & Menu Page",
                caption:
                  "Includes Speakers, Gallery, FAQ, Sponsors, and Partners pages.",
              },
              {
                src: buopenhouse7,
                title: "Registration Page",
                caption:
                  "A registration page for signing up to participate in activities.",
              },
            ].map((item, index) => (
              <div className="ep-card" key={index}>
                <div className="ep-img-wrap">
                  <img src={item.src} alt={item.title} />
                </div>

                <div className="ep-card-footer">
                  <div>
                    <h3 className="ep-card-label">{item.title}</h3>
                    <p className="ep-subtitle-small">{item.caption}</p>
                  </div>

                  <span className="ep-card-icon icon-example">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="services" id="services">
        <h2 className="heading">
          Project <span>Tools</span>
        </h2>

        <div className="services-container">
          {[
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
              alt: "HTML",
              title: "HTML",
              desc: "HTML is the standard language for creating and structuring web pages.",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
              alt: "CSS",
              title: "CSS",
              desc: "CSS is used to style and format HTML elements on web pages.",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              alt: "JavaScript",
              title: "JavaScript",
              desc: "JavaScript is a versatile, high-level programming language commonly used to create interactive effects within web browsers.",
            },
          ].map((tool) => (
            <div className="services-box" key={tool.title}>
              <img
                src={tool.src}
                alt={tool.alt}
                className="skill-logo"
                loading="lazy"
              />
              <h3>{tool.title}</h3>
              <p>{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <NavBarItem item="#bu-open-house" />
    </>
  );
}

export default BuOpenhousePage;
