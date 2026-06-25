import React, { useEffect,useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBarItem, NavReturn } from "../../helper";

import futureLogo from "../../assets/image2/futuretemp_logo.png";
import futureImg from "../../assets/image2/futuretemp.png";
import mediumImg from "../../assets/image2/futuretemp_meduim.png";
import colabImg from "../../assets/image2/futuretemp_colab.png";

function FutureTempPage() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

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
      <section className="home" id="future-temp">
        <div className="home-content">
          <h1>FutureTemp Weather Predictor</h1>
          <h4>
            A user-friendly web app using machine learning to accurately
            forecast weather in real-time.
          </h4>

          <a
            href="https://futuretempweatherr-46frt8rysephc6eeazx2an.streamlit.app/"
            className="btn btn2"
            target="_blank"
            rel="noreferrer"
          >
            FutureTemp Website
          </a>

          <a
            href="https://medium.com/@sourinsenior/futuretemp-weather-predictor-8e1522c9a01c"
            className="btn btn2"
            target="_blank"
            rel="noreferrer"
          >
            Medium Article
          </a>
        </div>

        <div className="about-img">
          <img src={futureLogo} alt="FutureTemp Logo" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="future-about">
        <div className="about-img">
          <img src={futureImg} alt="FutureTemp Preview" />
        </div>

        <div className="about-content">
          <h2 className="heading">
            WHAT IS <span>FutureTemp</span>
          </h2>

          <p>
            FutureTemp Weather Predictor integrates time-series forecasting with
            machine learning and web technologies. It uses LSTM-based models to
            predict future weather conditions and presents results through an
            intuitive real-time interface.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="services" id="future-features">
        <h2 className="heading">
          FutureTemp <span>Key Features</span>
        </h2>

        <div className="services-container">
          {[
            {
              title: "Future Temperature Forecasting",
              desc: "Uses LSTM neural networks to predict temperature trends with visual graphs.",
            },
            {
              title: "Interactive UI",
              desc: "Built with Streamlit for fast, simple, and interactive user experience.",
            },
            {
              title: "Data Visualization",
              desc: "Uses Matplotlib and Seaborn for clear and insightful charts.",
            },
            {
              title: "Responsive Design",
              desc: "Works smoothly across desktop, tablet, and mobile devices.",
            },
          ].map((item, i) => (
            <div className="services-box" key={i}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LINKS / EXAMPLES */}
      <section className="example-page" id="future-examples">
        <h1>
          ALL DETAIL CODE AND <span>WEBSITE</span>
        </h1>

        <p className="ep-subtitle">
          Explore project documentation, code, and live demo
        </p>

        <div className="ep-grid grid-3">
          {[
            {
              img: mediumImg,
              text: "My Medium article about FutureTemp Weather Predictor.",
              link: "https://medium.com/@sourinsenior/futuretemp-weather-predictor-8e1522c9a01c",
              btn: "Read Article",
            },
            {
              img: colabImg,
              text: "Try the Colab notebook for model testing.",
              link: "https://colab.research.google.com/drive/1uzl_kYfp-EWjrdhFGrbUrF7ZQND0au7u",
              btn: "Try Code",
            },
            {
              img: futureImg,
              text: "Live Streamlit Weather Prediction App.",
              link: "https://futuretempweatherr-46frt8rysephc6eeazx2an.streamlit.app/",
              btn: "Open App",
            },
          ].map((item, i) => (
            <div className="ep-card" key={i}>
              <div className="ep-img-wrap">
                <img src={item.img} alt={`example-${i}`} />
              </div>

              <div className="ep-card-footer">
                <p className="ep-card-label">{item.text}</p>

                <a
                  href={item.link}
                  className="btn btn-small"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.btn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section className="services" id="future-tools">
        <h2 className="heading">
          Project <span>Tools</span>
        </h2>

        <div className="services-container">
          {[
            {
              title: "Python",
              desc: "Used for data analysis, preprocessing, and ML model development.",
            },
            {
              title: "TensorFlow / Keras",
              desc: "Used to build and train LSTM models for weather prediction.",
            },
            {
              title: "Matplotlib / Seaborn",
              desc: "Used for visualizing data trends and prediction outputs.",
            },
            {
              title: "Streamlit",
              desc: "Used to deploy interactive machine learning web application.",
            },
          ].map((tool, i) => (
            <div className="services-box" key={i}>
              <h3>{tool.title}</h3>
              <p>{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <NavBarItem item="#future-temp" />
    </>
  );
}

export default FutureTempPage;
