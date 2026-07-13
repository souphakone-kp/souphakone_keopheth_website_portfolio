import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { NavBarItem } from "../../helper";
import img_profile from "../../assets/image/profiledp3.png";
import cert1 from "../../assets/imageEx/Certificate_Bu_wisesight.pdf";
import cert2 from "../../assets/imageEx/Certificate_wisesight.pdf";
import { ReactTinyLink } from "react-tiny-link";
import en from "../../locales/en.json";
import th from "../../locales/th.json";
import lo from "../../locales/lo.json";

import "./style/WiseSight.css";

const translations = { en, th, lo };

const url =
  "https://wisesight.com/th/articles/internship-business-data-and-analytics/";

const TOOL_LOGOS = {
  superset: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/apache-superset-icon-cyc19fiufldpekdt6c7jg.png/apache-superset-icon-80ygkwbe76iyhvftejjahm.png?_a=DATAiZAAZAA0",
  dremio: "https://vectorlogo.zone/logos/dremio/dremio-icon.svg",
  jupyter:
    "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg",
  pythonSql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
};

const TOOL_NAMES = {
  superset: "Apache Superset",
  dremio: "Dremio",
  jupyter: "Jupyter Notebook",
  pythonSql: "Python + SQL",
};

const SWOT_LABELS = {
  s: "Strengths",
  w: "Weaknesses",
  o: "Opportunities",
  t: "Threats",
};

function Intern() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language]?.intern;
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [iframeError, setIframeError] = useState(false);

  const [iframeLoading, setIframeLoading] = useState(true);
  const isProbablyBlocked = iframeLoading && !iframeError;

  const handleIframeLoad = () => {
    setIframeLoading(false);
    setIframeError(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!t) return null;

  return (
    <>
      <header className="header">
        <a href="#home" className="logo">
          Portfolio
        </a>

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
              className="itn-header-back"
              onClick={() => {
                window.scrollTo(0, 0);
                setMenuOpen(false);
              }}
              style={{ fontSize: "1.6rem" }}
            >
              Return
            </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="itn-hero" id="wisesight">
        <div className="itn-hero-bg" />
        <div className="itn-hero-grid" />
        <div className="itn-hero-content">
          <div className="itn-hero-tag">{t.showcaseTag}</div>
          <h1 className="itn-hero-title">
            WISE<span>SIGHT</span>
          </h1>
          <p className="itn-hero-subtitle">
            {t.metaDept} · {t.position.split("·")[0].trim()}
          </p>
          <div className="itn-hero-meta">
            <div className="itn-meta-item">
              <div className="itn-meta-label">{t.metaPeriodLabel}</div>
              <div className="itn-meta-value">{t.metaPeriod}</div>
            </div>
            <div className="itn-meta-item">
              <div className="itn-meta-label">{t.metaDeptLabel}</div>
              <div className="itn-meta-value">{t.metaDept}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="itn-section itn-surface">
        <div className="itn-section-label">About</div>
        <h2 className="itn-section-title">
          {t.showcaseTitle} <span>{t.showcaseTitleHighlight}</span>
        </h2>
        <div className="itn-about-grid">
          <div className="itn-about-img-wrap">
            <img src={img_profile} alt="Wisesight" />
            <div className="itn-about-badge">
              NO.1
              <br />
              Social Media
              <br />
              Analytics
            </div>
          </div>
          <div className="itn-about-text">
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <div className="itn-skills-row">
              {t.skills.map((s) => (
                <span key={s} className="itn-skill-tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* <div style={{marginTop:"20px"}}>
          <a
            href={cert1}
            target="_blank"
            rel="noopener noreferrer"
            className="itn-cert-card"
          >
            📄 View Certificate 1
          </a>

          <a
            href={cert2}
            target="_blank"
            rel="noopener noreferrer"
            className="itn-cert-card"
          >
            📄 View Certificate 2
          </a>
        </div> */}
        <div style={{ marginTop: "30px" }} className="itn-section-label">
          Certificates
        </div>

        <h2 className="itn-section-title">
          {t.certTitle} <span>{t.certTitleHighlight}</span>
        </h2>

        <div className="itn-cert-grid" style={{ marginTop: "-25px" }}>
          <a
            href={cert1}
            target="_blank"
            rel="noopener noreferrer"
            className="itn-cert-card"
          >
            📄 {t.cert1}
          </a>

          <a
            href={cert2}
            target="_blank"
            rel="noopener noreferrer"
            className="itn-cert-card"
          >
            📄 {t.cert2}
          </a>
        </div>
        <div style={{ marginTop: "30px" }} className="itn-section-label">
          Article
        </div>

        <h2 className="itn-section-title">
          {t.articleTitle} <span>{t.articleTitleHighlight}</span>
        </h2>

        {/*  {!iframeError ? (
          <iframe
            src={url}
            title="Wisesight Article"
            className="itn-iframe"
            loading="lazy"
            onError={() => setIframeError(true)}
          />
        ) : (
          <div className="itn-iframe-fallback">
            <p>{t.articleErrorText}</p>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="itn-cert-card"
              style={{ display: "inline-block", marginTop: "1rem" }}
            >
              🔗 {t.articleOpen}
            </a>
          </div>
        )} */}

        <div className="itn-article-preview">
          <div className="itn-tiny-wrapper">
            <ReactTinyLink
              cardSize="large"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              url={url}
              className="full-width-tiny-link"
            />
          </div>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="itn-cert-card itn-article-link"
          >
            🔗 Open Article
          </a>
        </div>
      </section>

      {/* TASKS */}
      <section className="itn-section">
        <div className="itn-section-label">Scope of Work</div>
        <h2 className="itn-section-title">
          {t.tasksTitle}
          <span>{t.tasksTitleHighlight}</span>
        </h2>
        <div className="itn-tasks-grid">
          {Object.entries(t.tasks).map(([key, task], i) => (
            <div key={key} className="itn-task-card">
              <div className="itn-task-num">0{i + 1}</div>
              <div className="itn-task-name">{task.name}</div>
              <div className="itn-task-desc">{task.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ROLES */}
      <section className="itn-section itn-surface">
        <div className="itn-section-label">My Responsibilities</div>
        <h2 className="itn-section-title">
          {t.rolesTitle}
          <span>{t.rolesTitleHighlight}</span>
        </h2>
        <div className="itn-roles-list">
          {t.roles.map((role, i) => {
            const [bold, ...rest] = role.split(" — ");
            return (
              <div key={i} className="itn-role-item">
                <span className="itn-role-arrow">→</span>
                <span className="itn-role-text">
                  <strong>{bold}</strong>
                  {rest.length > 0 && <> — {rest.join(" — ")}</>}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* TOOLS */}
      <section className="itn-section">
        <div className="itn-section-label">Tech Stack</div>
        <h2 className="itn-section-title">
          {t.toolsTitle}
          <span>{t.toolsTitleHighlight}</span>
        </h2>
        <div className="itn-tools-grid">
          {Object.entries(t.toolsDesc).map(([key, desc]) => (
            <div key={key} className="itn-tool-card">
              <div className="itn-tool-icon">
                <img src={TOOL_LOGOS[key]} alt={TOOL_NAMES[key]} />
              </div>
              <div className="itn-tool-name">{TOOL_NAMES[key]}</div>
              <div className="itn-tool-desc">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <NavBarItem item="#wisesight" />
    </>
  );
}

export default Intern;
