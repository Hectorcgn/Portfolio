import "./Projekte.scss";
import React from "react";
import schereteinpapier from "../../../assets/img/schere_stein_papier.png";
import zahlraten from "../../../assets/img/Zahl-Raten.png";
import wetterapp from "../../../assets/img/Wetter-app.png";

function Projekte() {
  return (
    <main>
      <section className="projectheader">
        <article className="header_box">
          <h2 style={{ textAlign: "left", margin: "0 0 10px 0" }}>
            Meine Projekte
          </h2>
          <span></span>
        </article>
        <article className="header_box2">
          <span></span>
          <h2 style={{ textAlign: "left", margin: "0 0 10px 0" }}>
            Vanilla Javascript
          </h2>
          <span></span>
        </article>
        <article className="vanilla_card_box">
          <div className="projektcard">
            <h2>Schere Stein Papier</h2>
            <img src={schereteinpapier} alt="" />
            <h2>tools:</h2>
            <ul>
              <li>HTML</li>
              <li>SCSS</li>
              <li>JAVASCRIPT</li>
            </ul>
            <div className="button_box">
              <button>
                <a href="https://github.com/Hectorcgn/schere_stein_papier">
                  GitHub repo
                </a>
              </button>
              <button>
                <a href="https://schere-stein-papier-app.netlify.app">
                  Liveapp
                </a>
              </button>
            </div>
          </div>
          <div className="projektcard">
            <h2>Zahl Raten</h2>
            <img src={zahlraten} alt="" />
            <h2>tools:</h2>
            <ul>
              <li>HTML</li>
              <li>SCSS</li>
              <li>JAVASCRIPT</li>
            </ul>
            <div className="button_box">
              <button>
                <a href="https://github.com/Hectorcgn/Zahl_erraten">
                  GitHub repo
                </a>
              </button>
              <button>
                <a href="https://zahl-raten.netlify.app">Liveapp</a>
              </button>
            </div>
          </div>
          <div className="projektcard">
            <h2>Wetter App</h2>
            <img src={wetterapp} alt="" />
            <h2>tools:</h2>
            <ul>
              <li>HTML</li>
              <li>SCSS</li>
              <li>JAVASCRIPT</li>
            </ul>
            <div className="button_box">
              <button>
                <a href="https://github.com/Hectorcgn/weather_app">
                  GitHub repo
                </a>
              </button>
              <button>
                <a href="https://mywetter-app.netlify.app">Liveapp</a>
              </button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Projekte;
