import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBarItem, NavReturn } from "../../helper";

import bu1 from "../../assets/image/BU1.png";
import bu2 from "../../assets/image/BU2.png";
import bu3 from "../../assets/image/BU3.png";
import bu4 from "../../assets/image/BU4.png";
import bu5 from "../../assets/image/BU5.png";

function BUHideAndSeekPage() {
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
      <section className="home" id="bu-hide-and-seek">
        <div className="home-content">
          <h1>BU Hide and Seek</h1>

          <h4>Create a hide and seek game on Roblox.</h4>

          <a
            href="https://www.roblox.com/th/games/16869260559/BU-Hide-and-Seek#!/about"
            target="_blank"
            rel="noreferrer"
            className="btn btn2"
          >
            Click to try demo
          </a>
        </div>

        <div className="about-img">
          <img src={bu1} alt="BU Hide and Seek" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="bu-about">
        <div className="about-img">
          <img src={bu2} alt="BU Hide and Seek Gameplay" />
        </div>

        <div className="about-content">
          <h2 className="heading">
            WHAT IS <span>BU HIDE AND SEEK</span>
          </h2>

          <p>
            Hide and Seek is a game where players are divided into two teams:
            "hiders" and "seekers." The seekers must find the hiders and touch
            them to return to the starting point, while the hiders must try to
            avoid being found.
          </p>

          <p>
            The game includes time and scoring rules such as a 30 second start
            time, 300 seconds total game duration, 80 seconds for hiders to
            hide, and 5 points awarded to winners.
          </p>
        </div>
      </section>

      {/* GAME OPERATION */}
      <section className="example-page" id="bu-examples">
        <h1>
          GAME <span>OPERATION</span>
        </h1>

        <p className="ep-subtitle">
          Gameplay and operation examples from the Roblox project
        </p>

        <div className="ep-group">
          <div className="ep-group-header">
            <span className="ep-badge badge-example">Gameplay</span>
            <span className="ep-line" />
          </div>

          <div className="ep-grid grid-3">
            {[
              {
                num: "01",
                src: bu3,
                label: "The game requires at least 2 players before starting.",
              },
              {
                num: "02",
                src: bu4,
                label:
                  'Players are divided into "hiders" and "seekers" with different WalkSpeed values.',
              },
              {
                num: "03",
                src: bu5,
                label:
                  "The game displays winners and awards points before resetting.",
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
      <section className="services" id="bu-tools">
        <h2 className="heading">
          Project <span>Tools</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <h3>Roblox Studio</h3>

            <p>
              Roblox Studio is a platform for creating games on Roblox using Lua
              scripting.
            </p>
          </div>

          <div className="services-box">
            <h3>Lua</h3>

            <p>
              Lua is the scripting language used in Roblox Studio for game
              development and gameplay systems.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <NavBarItem item="#bu-hide-and-seek" />
    </>
  );
}

export default BUHideAndSeekPage;
