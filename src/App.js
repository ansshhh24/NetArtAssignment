import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src="/images/logo.png" alt="C.R.I. Logo" className="logo" />
      </div>
    </header>
  );
}

function Main() {
  return (
    <main className="main">
      <section className="section section-awards">
        <div className="column1">
          <div className="image-container trophy">
            <img src="/images/trophy.png" alt="Trophy" className="trophyimg" />
          </div>
        </div>

        <div className="column2">
          <div className="text-over-manimage row1">
            <b>
              {" "}
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </b>
            <ul>
              <li>
                {" "}
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.{" "}
              </li>
            </ul>
          </div>
          <div className="image-container row 2">
            <img src="/images/man.png" alt="Man" className="manimg" />
          </div>
          <div className="row3">
            <p>
              Government of India has awarded the{" "}
              <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
              Joint Managing Director of C.R.I. Group received the award from
              Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
              Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </section>
      <section className="section section-machines">
        <div className="machine-container">
          <div className="text-over-machineimg row1">
            <p>
              INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
              RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS
              OF POWER FOR THE NATION.{" "}
            </p>
          </div>
          <div className="row2m">
            <img src="/images/machines.png" alt="Man" className="machinesimg" />
          </div>
          <div className="row3">
            <p>
              Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables
              - Solar Systems - Motors{" "}
            </p>
          </div>
        </div>
      </section>

      <section className="section section-info">
        <div></div>
        <div className="row1">
          <hr className="redline" />
        </div>
        <div className="vertical-container">
        <div className="row2 row2i">
        <p>
            CHEMICALS & PROCESS
            <span className="vertical"></span>
            POWER
            <span className="vertical"></span>
            WATER & WASTE
            <span className="vertical"></span>
            OILS & GAS
            <span className="vertical"></span>
            PHARMA
            <span className="vertical"></span>
            SUGARS & DISTILLERIES
            <span className="vertical"></span>
            PAPER & PULP
            <span className="vertical"></span>
            MARINE & DEFENCE
            <span className="vertical"></span>
            METAL & MINING
            <span className="vertical"></span>
            FOOD & BEVERAGE
            <span className="vertical"></span>
            PETROCHEMICAL & REFINERIES
            <span className="vertical"></span>
            SOLAR
            <span className="vertical"></span>
            BUILDING
            <span className="vertical"></span>
            HVAC
            <span className="vertical"></span>
            FIRE FIGHTING
            <span className="vertical"></span>
            AGRICULTURE & RESIDENTIAL
          </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <div className="icons">
            <img src="images/call.png" alt="" />
          </div>
          <p>Toll free: 1800 200 1234</p>
        </div>
        <div>
          <div className="icons">
            <img src="images/globe.png" alt="" />
          </div>
          <p>
            Website: <a href="www.crigroups.com">www.crigroups.com</a>
          </p>
        </div>
        <div>
          <div className="icons">
            <img src="images/facebook.png" alt="" />
          </div>
          <p>
            Facebook:{" "}
            <a href="www.facebook.com/cripumps">www.facebook.com/cripumps</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;
