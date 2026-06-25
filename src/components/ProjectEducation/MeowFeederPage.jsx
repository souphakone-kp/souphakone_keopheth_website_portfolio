import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import meow1 from "../../assets/image/meow1.png";
import meow2 from "../../assets/image/meow2.png";
import meow3 from "../../assets/image/meow3.png";
import meow4 from "../../assets/image/meow4.png";
import meow5 from "../../assets/image/meow5.png";
import meow6 from "../../assets/image/meow6.png";
import { NavBarItem, NavReturn } from "../../helper";

function MeowFeederPage() {
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
      <section className="home" id="meow-feeder">
        <div className="home-content">
          <h1>Meow Feeder</h1>
          <h4>
            Developed an automatic cat feeder that can be controlled by phone.
          </h4>

          <a
            href="https://drive.google.com/file/d/1w6HFbVQ_7Ks_-uDl9D4Z7bOjrRqR72AK/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn btn2"
          >
            Click to view VDO demo
          </a>
        </div>

        <div className="about-img">
          <img src={meow1} alt="Meow Feeder" />
        </div>
      </section>

      {/* PURPOSE */}
      <section className="about" id="meow-purpose">
        <div className="about-img">
          <img src={meow2} alt="Purpose" />
        </div>

        <div className="about-content">
          <h2 className="heading">
            Meow Feeder <span>Purpose</span>
          </h2>

          <p>
            The goal of the Meow Feeder project is to create a convenient and
            automated cat feeder, especially for pet owners who may not always
            be able to feed their cats manually. The system aims to simplify and
            streamline the management of cat feeding schedules through a mobile
            application, ensuring that cats receive their meals on time, which
            benefits their health and well-being.
          </p>
        </div>
      </section>

      {/* FUNCTIONALITY */}
      <section className="services" id="meow-functionality">
        <h2 className="heading">
          <span>Functionality</span>
        </h2>

        <div className="services-container">
          {[
            {
              title: "Cloud Control",
              desc: "Manage feeding via a mobile app with Arduino IoT IDE, allowing remote operation from anywhere.",
            },
            {
              title: "Scheduled Feeding",
              desc: "Set and adjust feeding times through the app, with accurate timing using NTP. Real-Time Adjustments: Control feeding times and amounts in real-time via the cloud.",
            },
            {
              title: "Controlled Dispensing",
              desc: "A servo motor ensures precise and tidy food dispensing.",
            },
          ].map((item, index) => (
            <div className="services-box" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SYSTEM OPERATION */}
      <section className="example-page" id="meow-operation">
        <h1>
          System <span>Operation</span>
        </h1>

        <p className="ep-subtitle">
          Overview of the Meow Feeder system operation
        </p>

        <div className="ep-group">
          <div className="ep-group-header">
            <span className="ep-badge badge-example">Operation</span>
            <span className="ep-line" />
          </div>

          <div className="ep-grid grid-2">
            {[
              {
                num: "01",
                src: meow3,
                label: "System Operation of the Tool",
              },
              {
                num: "02",
                src: meow4,
                label: "Creating an ESP32 Web Server",
              },
              {
                num: "03",
                src: meow5,
                label: "Feeding via ESP32 Web Server",
              },
              {
                num: "04",
                src: meow6,
                label: "Setting NTP Time for Feeding",
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
      <section className="services" id="meow-tools">
        <h2 className="heading">
          Hard ware <span>Tools</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <h3>ESP32 Microcontroller</h3>
            <p>Controls the device and connects to Wi-Fi.</p>
          </div>

          <div className="services-box">
            <h3>SG90 Servo Motor</h3>
            <p>Controls the feeder door.</p>
          </div>
        </div>

        <h2 className="heading" style={{ marginTop: "6rem" }}>
          Software <span>Tools</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg"
              alt="Arduino IoT IDE"
              className="skill-logo"
            />

            <h3>Arduino IoT IDE</h3>

            <p>
              A program used for writing control code and uploading it to the
              ESP32 board (online or desktop IDE).
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <NavBarItem item="#meow-feeder" />
    </>
  );
}

export default MeowFeederPage;
