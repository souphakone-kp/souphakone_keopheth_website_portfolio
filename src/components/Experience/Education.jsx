import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext"; // นำเข้า Context
import { Paths } from "../../routes/app";

// Import Assets
import img_1 from "../../assets/imageEx/edu_1.png";
import proj1 from "../../assets/image/proj1.png";
import proj3 from "../../assets/image/proj3.png";
import proj4 from "../../assets/image/proj4.png";
import bu1 from "../../assets/image/BU1.png";
import proj6 from "../../assets/image/proj6.png";
import eat1 from "../../assets/image/eat1.png";
import proj8 from "../../assets/image/proj8.png";
import buOpenhouse from "../../assets/image/Buopenhouse1.png";
import futuretemp from "../../assets/image2/futuretemp.png";

// Import Translations
import en from "../../locales/en.json";
import th from "../../locales/th.json";
import lo from "../../locales/lo.json";
import { NavBarItem } from "../../helper";

const translations = { en, th, lo };

function Education() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const projects = [
    { title: "OBSH website", image: proj1, path: Paths.OBSH },
    { title: "Veterinary hospitals", image: proj3, path: Paths.HOSTPITALS },
    { title: "NETFLIX Data Project", image: proj4, path: Paths.NETFLIX },
    { title: "BU HIDE AND SEEK", image: bu1, path: Paths.BU_HIDE_AND_SEEK },
    { title: "Meow Feeder", image: proj6, path: Paths.MEOW_FEDDER },
    {
      title: "EAT FOR HEALTH Application",
      image: eat1,
      path: Paths.EAT_FOR_HEALTH,
    },
    {
      title: "Financial Diary Mobile Application",
      image: proj8,
      path: Paths.FINANCIAL_DIARY,
    },
    {
      title: "BU OpenHouse Web",
      image: buOpenhouse,
      path: Paths.BU_OPEN_HOUSE,
    },
    {
      title: "FutureTemp Weather Predictor",
      image: futuretemp,
      path: Paths.FUTURE_TEMP,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <header className="header">
        <Link to="/home" className="logo" onClick={() => window.scrollTo(0, 0)}>
          Portfolio
        </Link>
        <div className="language-switcher">
          <button
            className={language === "en" ? "active-lang" : ""}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>

          <button
            className={language === "th" ? "active-lang" : ""}
            onClick={() => setLanguage("th")}
          >
            TH
          </button>

          <button
            className={language === "lo" ? "active-lang" : ""}
            onClick={() => setLanguage("lo")}
          >
            LO
          </button>
        </div>
        <i
          className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}
          id="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <Link
            to="/home"
            className="btn btn2"
            onClick={() => window.scrollTo(0, 0)}
          >
            &lt; Return
          </Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="home" id="education">
        <div className="home-content">
          <h1>{t.education.university}</h1>
          <h4>{t.education.faculty}</h4>
          <div className="exp-logo-biger">
            <img
              src="https://mbi.bu.ac.th/images/about.us/bkk.uni/10-00_picture_Top.jpg"
              alt="BU"
            />
          </div>
        </div>
        <div className="about-img">
          <img
            src="https://contents.bu.ac.th/contents/files/uploads/c5100907-14d2-4415-887f-5e5ac387c59b.webp"
            alt="BU"
          />
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="exp-showcase" id="bu-about">
        <div className="exp-showcase-image">
          <img src={img_1} alt="Education" />
        </div>
        <div className="exp-showcase-content">
          <span className="exp-showcase-tag">{t.education.tag}</span>
          <h2 className="exp-showcase-title">
            {t.education.degree.split(" ")[0]}{" "}
            <span>{t.education.degree.split(" ").slice(1).join(" ")}</span>
          </h2>
          <h3 className="exp-showcase-subtitle">{t.education.major}</h3>
          <div className="exp-showcase-line"></div>
          <p className="exp-showcase-text">{t.education.description1}</p>
          <p className="exp-showcase-text">{t.education.description2}</p>

          <div className="exp-showcase-skills">
            <span>Software Engineering</span>
            <span>Machine Learning</span>
            <span>Data Analytics</span>
            <span>Web Development</span>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="services" id="project">
        <h2 className="heading">
          {t.education.projectsTitle}{" "}
          <span>{t.education.projectsHighlight}</span>
        </h2>
        <div className="portfolio-container">
          {projects.map((project) => (
            <Link
              to={project.path}
              className="portfolio-box"
              key={project.title}
            >
              <img src={project.image} alt={project.title} />
              <div className="portfolio-layer">
                <h4>{project.title}</h4>
                <p>{t.education.clickView}</p>
                <i className="fa-solid fa-up-right-from-square"></i>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <NavBarItem item="#education" />
    </>
  );
}

export default Education;
