import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { NavBarItem } from "../../helper";

import img_profile from "../../assets/image/anousith_profile.png";
import cert1 from "../../assets/imageEx/anousith_work_cert.pdf";
import en from "../../locales/en.json";
import th from "../../locales/th.json";
import lo from "../../locales/lo.json";
import "./style/Anousith.css";

const translations = { en, th, lo };

const ANS_LOGO  = "https://anousith.express/assets/imgs/ans-logo.png";
const NEXT_LOGO = "https://anousith.express/assets/imgs/logo_next_day.png";
const IOS_URL   = "https://apps.apple.com/us/app/anousith-express/id6745592067";
const AND_URL   = "https://play.google.com/store/apps/details?id=express.anousith.app";
const NEXT_URL  = "https://nextday.anousith.express/";
const BRANCH_URL= "https://anousith.express/branch.php";


const TECH_ICONS = [
  { key: "react",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { key: "node",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { key: "javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { key: "typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
];

const RESP_ICONS = ["fa-code", "fa-layer-group", "fa-server", "fa-chart-line", "fa-rotate"];

function Anousith() {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const t = translations[language] || translations["en"];
  // All Anousith-specific text lives under t.anousith
  const a = t.anousith;

  useEffect(() => { window.scrollTo(0, 0); }, [location]);

  const STATS = [
    { num: "10",   label: a.stats.months },
    { num: "500+", label: a.stats.branches },
    { num: "4+",   label: a.stats.systems },
    { num: "18+",  label: a.stats.provinces },
  ];

  // Pair icon keys with translated responsibility objects
  const RESPONSIBILITIES = a.responsibilities.items.map((item, i) => ({
    ...item,
    icon: RESP_ICONS[i],
  }));

  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────── */}
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

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="ans-hero" id="anousith">
        <div className="ans-hero-overlay" />
        <div className="ans-hero-content">
          <p className="ans-hero-eyebrow">{a.hero.eyebrow}</p>
          <h1 className="ans-hero-title">
            Anousith<br /><em>{a.hero.titleHighlight}</em>
          </h1>
          <p className="ans-hero-sub">
            Anousith Express Laos<br />
            {a.hero.sub}
          </p>
          <div className="ans-hero-btns">
            <a href={AND_URL} target="_blank" rel="noopener noreferrer" className="ans-btn-primary">
              <i className="fa-brands fa-google-play" /> {a.hero.btnApp}
            </a>
            <a href={BRANCH_URL} target="_blank" rel="noopener noreferrer" className="ans-btn-ghost">
              {a.hero.btnBranch}
            </a>
          </div>
        </div>

        {/* Hero card */}
        <div className="ans-hero-card">
          <img src={ANS_LOGO} alt="Anousith" className="ans-hero-logo" />
          <div className="ans-hero-card-divider" />
          <div className="ans-hero-card-row">
            <span className="ans-hero-card-label">{a.card.roleLabel}</span>
            <span className="ans-hero-card-val">{t.experience.work.title}</span>
          </div>
          <div className="ans-hero-card-row">
            <span className="ans-hero-card-label">{a.card.periodLabel}</span>
            <span className="ans-hero-card-val">{t.experience.work.year}</span>
          </div>
          <div className="ans-hero-card-row">
            <span className="ans-hero-card-label">{a.card.durationLabel}</span>
            <span className="ans-hero-card-val">{a.card.durationVal}</span>
          </div>
          <div className="ans-hero-card-row">
            <span className="ans-hero-card-label">{a.card.focusLabel}</span>
            <span className="ans-hero-card-val">{a.card.focusVal}</span>
          </div>
          <a href={NEXT_URL} target="_blank" rel="noopener noreferrer" className="ans-hero-card-cta">
            {a.card.cta} <i className="fa-solid fa-arrow-right" />
          </a>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────── */}
      <div className="ans-stats-bar">
        {STATS.map(s => (
          <div key={s.label} className="ans-stat">
            <span className="ans-stat-num">{s.num}</span>
            <span className="ans-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── ABOUT ──────────────────────────────────────────── */}
      <section className="ans-section ans-white">
        <div className="ans-container ans-about-grid">
          <div className="ans-about-visual">
            <div className="ans-about-img-wrap ">
              <img src={img_profile} alt="Anousith Express" />
            </div>
            <img src={NEXT_LOGO} alt="Next Day" className="ans-next-img" />
          </div>
          <div className="ans-about-body">
            <div className="ans-label-tag">{a.about.label}</div>
            <h2 className="ans-section-title">
              {a.about.title} <span>{a.about.titleHighlight}</span>
            </h2>
            <p>{a.about.p1}</p>
            <p>{a.about.p2}</p>
            <div className="ans-tags">
              {a.about.tags.map(tag => (
                <span key={tag} className="ans-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESPONSIBILITIES ───────────────────────────────── */}
      <section className="ans-section ans-gray">
        <div className="ans-container">
          <div className="ans-label-tag">{a.responsibilities.label}</div>
          <h2 className="ans-section-title">
            {a.responsibilities.title} <span>{a.responsibilities.titleHighlight}</span>
          </h2>
          <div className="ans-svc-grid">
            {RESPONSIBILITIES.map((s, i) => (
              <div key={i} className="ans-svc-card">
                <div className="ans-svc-top">
                  <span className="ans-svc-num">0{i + 1}</span>
                  <div className="ans-svc-icon-wrap">
                    <i className={`fa-solid ${s.icon}`} />
                  </div>
                </div>
                <h3 className="ans-svc-name">{s.name}</h3>
                <p className="ans-svc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ─────────────────────────────────────── */}
      <section className="ans-section ans-white">
        <div className="ans-container">
          <div className="ans-label-tag">{a.tech.label}</div>
          <h2 className="ans-section-title">
            {a.tech.title} <span>{a.tech.titleHighlight}</span>
          </h2>
          <div className="ans-tools-grid">
            {TECH_ICONS.map(({ key, icon }) => (
              <div key={key} className="ans-tool-card">
                <div className="ans-tool-icon">
                  <img src={icon} alt={a.tech.items[key].name} />
                </div>
                <h3 className="ans-tool-name">{a.tech.items[key].name}</h3>
                <p className="ans-tool-desc">{a.tech.items[key].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATES ───────────────────────────────────── */}
      <section className="ans-section ans-gray">
        <div className="ans-container">
          <div className="ans-label-tag">{a.certificates.label}</div>
          <h2 className="ans-section-title">
            {a.certificates.title} <span>{a.certificates.titleHighlight}</span>
          </h2>
          <div className="ans-cert-grid">
            {[
              { href: cert1, title: a.certificates.cert1Title, sub: a.certificates.cert1Sub },
            ].map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="ans-cert-card">
                <div className="ans-cert-left">
                  <div className="ans-cert-icon"><i className="fa-solid fa-file-pdf" /></div>
                </div>
                <div className="ans-cert-body">
                  <p className="ans-cert-title">{c.title}</p>
                  <p className="ans-cert-sub">{c.sub}</p>
                  <p className="ans-cert-org">{a.certificates.org}</p>
                </div>
                <div className="ans-cert-arrow"><i className="fa-solid fa-arrow-up-right-from-square" /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="ans-cta">
        <div className="ans-cta-inner">
          <img src={ANS_LOGO} alt="Anousith" className="ans-cta-logo" />
          <h2 className="ans-cta-title">{a.cta.title}</h2>
          <p className="ans-cta-sub">{a.cta.sub}</p>
          <div className="ans-cta-btns">
            <a href={AND_URL}  target="_blank" rel="noopener noreferrer" className="ans-store-btn">
              <i className="fa-brands fa-google-play" /> {a.cta.btnPlay}
            </a>
            <a href={IOS_URL}  target="_blank" rel="noopener noreferrer" className="ans-store-btn">
              <i className="fa-brands fa-apple" /> {a.cta.btnAppStore}
            </a>
            <a href={NEXT_URL} target="_blank" rel="noopener noreferrer" className="ans-store-ghost">
              <i className="fa-solid fa-globe" /> {a.cta.btnNext}
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="ans-footer">
        <div className="ans-footer-inner">
          <img src={ANS_LOGO} alt="Anousith" className="ans-footer-logo" />
          <p className="ans-footer-copy">
            © {new Date().getFullYear()} Anousith Logistics Co., Ltd. · {t.footer.copyright}
          </p>
          <div className="ans-footer-links">
            <a href={BRANCH_URL} target="_blank" rel="noopener noreferrer">{a.nav.branches}</a>
            <a href={AND_URL}    target="_blank" rel="noopener noreferrer">Android</a>
            <a href={IOS_URL}    target="_blank" rel="noopener noreferrer">iOS</a>
          </div>
        </div>
      </footer>

      <NavBarItem item="#anousith" />
    </>
  );
}

export default Anousith;