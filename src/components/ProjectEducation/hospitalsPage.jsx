import React, { useEffect, useState } from "react";

import obsg1 from "../../assets/image/hospitals1.png";
import obsg2 from "../../assets/image/hospitals2.png";
import obsg3 from "../../assets/image/hospitals3.png";
import obsg4 from "../../assets/image/hospitals4.png";
import obsg5 from "../../assets/image/hospitals5.png";
import obsg6 from "../../assets/image/hospitals6.png";
import { NavBarItem, NavReturn } from "../../helper";

function HospitalsPage() {
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
      <section className="home" id="hospitals">
        <div className="home-content">
          <h1>Veterinary hospitals</h1>
          <h4>
            Database design of the animal clinic's database management system.
          </h4>
        </div>

        <div className="about-img">
          <img src={obsg1} alt="hospitals" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-img">
          <img src={obsg2} alt="hospitals" />
        </div>

        <div className="about-content">
          <h2 className="heading">
            Operational Characteristics Of <span>The System</span>
          </h2>

          <p>
            The veterinary clinic database management system is designed to
            store and manage information related to the healthcare of animals in
            the clinic. This system gathers data about pet owners, animal health
            records, appointments, diagnoses, treatments, prescriptions, and
            payment information to enable the clinic to provide efficient care.
            This system aids the clinic in operating efficiently, saving time,
            and ensuring accurate and effective healthcare for the animals.
          </p>
        </div>
      </section>

      {/* DATABASE EXAMPLES */}
      <section className="example-page-color-dark ep-style">
        <h1>
          DATABASE <span>EXAMPLE</span>
        </h1>

        <p className="ep-subtitle">
          SQL query examples from the veterinary hospital system
        </p>

        {/* EXAMPLE 1 */}
        <div className="ep-group">
          <div className="ep-grid grid-1">
            <div className="ep-card">
              <div className="ep-img-wrap">
                <img src={obsg3} alt="example 1" />
              </div>
              <div className="ep-card-footer">
                <span className="ep-card-label">
                  Find all reports that are not of type "Appointment".
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* EXAMPLE 2 */}
        <div className="ep-group">
          <div className="ep-grid grid-1">
            <div className="ep-card">
              <div className="ep-img-wrap">
                <img src={obsg4} alt="example 2" />
              </div>
              <div className="ep-card-footer">
                <span className="ep-card-label">
                  Sort by the owner_id column in descending order.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* EXAMPLE 3 */}
        <div className="ep-group">
          <div className="ep-grid grid-1">
            <div className="ep-card">
              <div className="ep-img-wrap">
                <img src={obsg5} alt="example 3" />
              </div>
              <div className="ep-card-footer">
                <span className="ep-card-label">
                  Find owners with pets older than 3 years.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* EXAMPLE 4 */}
        <div className="ep-group">
          <div className="ep-grid grid-1">
            <div className="ep-card">
              <div className="ep-img-wrap">
                <img src={obsg6} alt="example 4" />
              </div>
              <div className="ep-card-footer">
                <span className="ep-card-label">
                  Sort all owners' names alphabetically from A to Z.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <NavBarItem item="#hospitals" />
    </>
  );
}

export default HospitalsPage;
