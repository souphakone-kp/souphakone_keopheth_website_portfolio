import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import proj8 from "../../assets/image/proj8.png";
import diary1 from "../../assets/image/diary1.png";
import diary2 from "../../assets/image/diary2.png";
import diary3 from "../../assets/image/diary3.png";
import diary4 from "../../assets/image/diary4.png";
import diary5 from "../../assets/image/diary5.png";
import diary6 from "../../assets/image/diary6.png";
import diary7 from "../../assets/image/diary7.png";
import diary8 from "../../assets/image/diary8.png";
import { NavBarItem, NavReturn } from "../../helper";

function FinancialDiaryPage() {
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
      <section className="home" id="financial-diary">
        <div className="home-content">
          <h1>Financial Diary</h1>
          <h4>A Mobile Application for Personal Data Assistant.</h4>
        </div>

        <div className="about-img">
          <img src={proj8} alt="Financial Diary" />
        </div>
      </section>

      {/* PURPOSE */}
      <section className="about" id="financial-purpose">
        <div className="about-img">
          <img src={diary1} alt="Financial Diary Purpose" />
        </div>

        <div className="about-content">
          <h2 className="heading">
            Financial Diary <span>Purpose</span>
          </h2>

          <p>
            The "Financial Diary" application focuses on enabling users to
            manage their personal finances efficiently by recording daily income
            and expenses, such as food costs, transportation, or accommodation.
            This application helps users observe and analyze their spending
            behavior in detail, presenting summarized information in an
            easy-to-understand format. This allows users to assess their
            financial situation over different periods conveniently.
            Additionally, it aids in adjusting spending habits to fit current
            financial situations, leading to more systematic and effective
            financial management.
          </p>
        </div>
      </section>

      {/* APPLICATION EXAMPLES */}
      <section className="example-page" id="financial-examples">
        <h1>
          Application Page <span>Example</span>
        </h1>

        <p className="ep-subtitle">
          Example screens from the Financial Diary application
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
                src: diary2,
                label: "Manage Personal Information Page",
              },
              {
                num: "02",
                src: diary3,
                label: "Define Revenue Categories",
              },
              {
                num: "03",
                src: diary4,
                label: "Revenue and Expense Records",
              },
              {
                num: "04",
                src: diary5,
                label: "Check Revenue Page",
              },
              {
                num: "05",
                src: diary6,
                label: "Check Expense Page",
              },
              {
                num: "06",
                src: diary7,
                label: "Revenue and Expense Dashboard",
              },
              {
                num: "07",
                src: diary8,
                label: "Calculator Page",
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
      <section className="services" id="financial-tools">
        <h2 className="heading">
          Project <span>Tools</span>
        </h2>

        <div className="services-container">
          {/* FIGMA */}
          <div className="services-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              alt="Figma"
              className="skill-logo"
            />

            <h3>Figma</h3>

            <p>
              Figma helps in designing the Financial Diary application with
              prototyping tools, real-time collaboration, and efficient handoff
              to development teams.
            </p>
          </div>

          {/* FLUTTER */}
          <div className="services-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
              alt="Flutter"
              className="skill-logo"
            />

            <h3>Flutter</h3>

            <p>
              Flutter is an open-source framework for building beautiful,
              natively compiled, multi-platform applications from a single
              codebase.
            </p>
          </div>

          {/* DART */}
          <div className="services-box">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
              alt="Dart"
              className="skill-logo"
            />

            <h3>Dart</h3>

            <p>
              Dart is an approachable, portable, and productive language for
              high-quality apps on any platform.
            </p>
          </div>

          {/* ANDROID STUDIO */}
          <div className="services-box">
            <i
              className="fa-brands fa-android"
              style={{ fontSize: "6rem", marginBottom: "1.5rem" }}
            ></i>

            <h3>Android Studio</h3>

            <p>
              Android Studio is Google’s official IDE for Android development,
              offering an all-in-one environment for coding, testing, UI design,
              emulation, and debugging.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <NavBarItem item="#financial-diary" />
    </>
  );
}

export default FinancialDiaryPage;
