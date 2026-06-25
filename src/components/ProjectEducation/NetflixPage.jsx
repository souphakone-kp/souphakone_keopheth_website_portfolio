import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import netflix1 from "../../assets/image/netflix1.png";
import netflix2 from "../../assets/image/netflix2.png";
import netflix3 from "../../assets/image/netflix3.png";
import netflix4 from "../../assets/image/netflix4.png";
import netflix5 from "../../assets/image/netflix5.png";
import netflix6 from "../../assets/image/netflix6.png";
import netflix7 from "../../assets/image/netflix7.png";
import netflix8 from "../../assets/image/netflix8.png";
import { NavBarItem, NavReturn } from "../../helper";

function NetflixPage() {
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
      <section className="home" id="netflix">
        <div className="home-content">
          <h1>NETFLIX Data Project</h1>
          <h4>
            The dataset design provides an overview of the sample Netflix
            database.
          </h4>
        </div>

        <div className="about-img">
          <img src={netflix1} alt="Netflix Project" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="netflix-about">
        <div className="about-img">
          <img src={netflix2} alt="Netflix Dataset" />
        </div>

        <div className="about-content">
          <h2 className="heading">
            NETFLIX <span>DATA SET</span>
          </h2>

          <p>
            The Netflix dataset used in this example pertains to movies and TV
            shows on Netflix. It includes information related to the available
            content on Netflix, as well as viewer behavior data, such as
            ratings, rating descriptions, release year, user audience scores,
            audience group size, and more.
          </p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="services" id="netflix-approach">
        <h2 className="heading">
          NETFLIX <span>APPROACH</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <h3>Research</h3>
            <p>
              Find the most interesting dataset for our group that can be
              practically applied in the business world.
            </p>
          </div>

          <div className="services-box">
            <h3>Data preprocessing</h3>
            <p>
              Cleanse and encode our data to train a machine learning model.
            </p>
          </div>

          <div className="services-box">
            <h3>Model training</h3>
            <p>
              Train the model with the processed dataset and compare the
              performance of each model to find the most suitable one.
            </p>
          </div>

          <div className="services-box">
            <h3>Documentation</h3>
            <p>
              Evaluate and outline our project data to present in the final
              stage.
            </p>
          </div>
        </div>
      </section>

      {/* DATA DISPLAY EXAMPLES */}
      <section className="example-page" id="netflix-examples">
        <h1>
          DATA DISPLAY <span>EXAMPLES</span>
        </h1>

        <p className="ep-subtitle">
          Examples of charts and visualizations from the Netflix dataset
        </p>

        {/* DATA VISUALIZATION */}
        <div className="ep-group">
          <div className="ep-group-header">
            <span className="ep-badge badge-example">Analytics</span>
            <span className="ep-line" />
          </div>

          <div className="ep-grid grid-3">
            {[
              {
                num: "01",
                src: netflix3,
                label: "Graph showing the data on content ratings rankings.",
              },
              {
                num: "02",
                src: netflix4,
                label: "Graph showing audience ratings (Content Ratings).",
              },
              {
                num: "03",
                src: netflix5,
                label: "Graph showing user rating scores over release years.",
              },
              {
                num: "04",
                src: netflix6,
                label:
                  "Graph showing the number of movies or TV shows released each year.",
              },
              {
                num: "05",
                src: netflix7,
                label: "Categorize how many movies are there in each category.",
              },
              {
                num: "06",
                src: netflix8,
                label:
                  "List the movies or TV shows in each category and specify included titles.",
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
      <section className="services" id="netflix-tools">
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
              Python code using Pandas for data loading, cleaning, and
              processing from CSV sources.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <NavBarItem item="#netflix" />
    </>
  );
}

export default NetflixPage;
