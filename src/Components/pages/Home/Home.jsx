import React from "react";
import { useEffect } from "react";
import imgself from "../../../assets/img/selfie1.jpg";
import "./Home.scss";
import { Link } from "react-router-dom";
import htmlimg from "../../../assets/img/html-1.svg";
import scssimg from "../../../assets/img/sass-1.svg";
import javascripimg from "../../../assets/img/javascript-1.svg";
import reactimg from "../../../assets/img/react-2.svg";
import gitimg from "../../../assets/img/git.svg";
import githubimg from "../../../assets/img/github.svg";
import figmabimg from "../../../assets/img/Figma.svg";
function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    });
    document.querySelectorAll(".slide-left").forEach((section) => {
      observer.observe(section);
    });
    document.querySelectorAll(".slide-right").forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <main>
      <section className="home_welcome_box slide-left">
        <article className="welcome_text_box ">
          <h2>
            Ich bin <span>Hector</span>, ein frischer Absolvent des Supercode
            Fullstack-Bootcamps.
          </h2>
          <p>
            Ich möchte meine Fähigkeiten einsetzen, um komplexe Webanwendungen
            zu bauen, die Nutzern einen Mehrwert bieten.
          </p>
          <button className="button">
            <Link to={"/kontakt"}>
              <h2>Kontaktier mich !</h2>
            </Link>
          </button>
        </article>
        <article className="selfie_box">
          <img src={imgself} alt="profiel_bild" />
        </article>
      </section>
      <section className="zitat_box slide-right">
        <h2>
          Ich seh' große Männer wein'n, ich seh' kleine Kinder lächeln Ich seh'
          so viel Lämmer schweigen, aber reine Herzen sprechen
        </h2>
        <p>- Credibil</p>
      </section>

      <section className="projeket_box slide-left">
        <article className="header_box">
          <h2 style={{ textAlign: "left", margin: "0 0 10px 0" }}>
            Meine Projekte
          </h2>
          <span></span>
          <Link to={"/projekte"} className="button">
            <h2>... mehr</h2>
          </Link>
        </article>
      </section>
      <section className="skills_box slide-right">
        <article className="header_box">
          <h2>Meine Skills</h2>
          <span></span>
        </article>
        <article className="skills_img_box">
          <img src={htmlimg} alt="html Image" className="logos" />
          <img src={scssimg} alt="sass Image" className="logos" />
          <img src={javascripimg} alt="javascrip Image" className="logos" />
          <img src={reactimg} alt="react Image" className="logos" />
          <img src={githubimg} alt="react Image" className="logos" />
          <img src={gitimg} alt="Git Image" />
          <img src={figmabimg} alt=" Figma Image" />
        </article>
      </section>

      <section className="info_box slide-left">
        <article className="header_box">
          <h2>Infos über mich</h2>
          <span></span>
        </article>
        <h2>
          Ich bin Hector, ein Webentwickler aus Köln. Ich bin ein frischer
          Absolvent des Fullstack-Bootcamps von Supercode mit Sitz in
          Düsseldorf. Dort habe ich...
        </h2>
        <button className="button">
          <Link to={"/infos"}>
            <h2>Zu den Infos</h2>
          </Link>
        </button>
      </section>
    </main>
  );
}

export default Home;
