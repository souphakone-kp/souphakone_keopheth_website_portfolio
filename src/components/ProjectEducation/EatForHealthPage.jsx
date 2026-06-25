import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import eat1 from "../../assets/image/eat1.png";
import eat2 from "../../assets/image/eat2.png";
import eat3 from "../../assets/image/eat3.png";
import eat4 from "../../assets/image/eat4.png";
import eat5 from "../../assets/image/eat5.png";
import eat7 from "../../assets/image/eat7.png";
import eat8 from "../../assets/image/eat8.png";
import eat9 from "../../assets/image/eat9.png";
import eat10 from "../../assets/image/eat10.png";
import { NavBarItem, NavReturn } from "../../helper";

function EatForHealthPage() {
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
      <section className="home" id="eat-for-health">
        <div className="home-content">
          <h1>EAT FOR HEALTH Application</h1>

          <h4>
            An application designed to improve health through proper and
            efficient eating.
          </h4>

          <a
            href="https://www.figma.com/proto/dpIGUwVfwoBhIchHKiajDb/Project_1640704324_Souphakone?node-id=1018-493&node-type=FRAME&t=b8OiMJ9BCFHeyviO-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=314%3A1851&show-proto-sidebar=1"
            target="_blank"
            rel="noreferrer"
            className="btn btn2"
          >
            Click to try prototype
          </a>
        </div>

        <div className="about-img">
          <img src={eat1} alt="Eat For Health" />
        </div>
      </section>

      {/* CONCEPT */}
      <section className="about" id="eat-about">
        <div className="about-img">
          <img src={eat2} alt="Eat For Health Concept" />
        </div>

        <div className="about-content">
          <h2 className="heading">
            The concept of <span>Eat for Health</span>
          </h2>

          <p>
            Maintaining health through eating is extremely important, but
            sometimes managing food and nutrients can be complicated. From these
            challenges, the "Eat for Health" application was designed to help
            make taking care of your health through eating easier and more
            effective.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="services" id="eat-features">
        <h2 className="heading">
          Features of the <span>Eat for Health</span>
        </h2>

        <div className="services-container">
          {[
            {
              title: "Meal Planning",
              desc: "Allows users to easily plan meals based on their dietary goals, whether it's for weight loss, disease management, or general health improvement.",
            },
            {
              title: "Nutrient Tracking",
              desc: "Provides tools to track nutrient intake, giving users accurate and clear data on what they consume.",
            },
            {
              title: "AI Assistance",
              desc: "Users can plan and monitor their meals with the help of AI, which offers personalized suggestions and makes health management easier.",
            },
            {
              title: "Goal Setting",
              desc: "Enables users to set dietary goals tailored to their health needs and continuously track progress.",
            },
            {
              title: "Comprehensive Tools",
              desc: "Offers modern tools that ensure users can manage their nutrition effectively in a simple and enjoyable way.",
            },
          ].map((item, index) => (
            <div className="services-box" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATION EXAMPLES */}
      <section className="example-page" id="eat-examples">
        <h1>
          Application Page <span>Example</span>
        </h1>

        <p className="ep-subtitle">
          Example screens from the Eat for Health application
        </p>

        <div className="ep-group">
          <div className="ep-group-header">
            <span className="ep-badge badge-example">Application</span>
            <span className="ep-line" />
          </div>

          <div className="ep-grid grid-3">
            {[
              {
                num: "01",
                src: eat3,
                label: "Login and Register Page",
              },
              {
                num: "02",
                src: eat4,
                label: "Main Application Page",
              },
              {
                num: "03",
                src: eat5,
                label: "Test BMI Page",
              },
              {
                num: "04",
                src: eat7,
                label: "Recommend Food And AI Meal Page",
              },
              {
                num: "05",
                src: eat8,
                label: "Consult With AI Page",
              },
              {
                num: "06",
                src: eat9,
                label: "Trainer Chat Page",
              },
              {
                num: "07",
                src: eat10,
                label: "Scan Nutrients Page",
              },
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
      <section className="services" id="eat-tools">
        <h2 className="heading">
          Project <span>Tools</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              alt="Figma"
              className="skill-logo"
            />

            <h3>Figma</h3>

            <p>
              Figma helps in designing the "Eat for Health" app quickly with
              prototyping tools, real-time collaboration, and efficient handoff
              to development teams.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <NavBarItem item="#eat-for-health" />
    </>
  );
}

export default EatForHealthPage;
