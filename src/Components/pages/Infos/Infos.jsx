import React, { useEffect } from "react";
import "./Infos.scss";
import imgself from "../../../assets/img/selfie1.jpg";
import Skills from "../../shared/Skills/Skills";

function Infos() {
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
    document.querySelectorAll(".slide-section").forEach((section) => {
      observer.observe(section);
    });
  }, []);
  return (
    <main>
      <section className="bio_box slide-section">
        <article className="bio_text_box">
          <h2>Infos über mich</h2>
          <p>
            Ich bin <span>Hector</span>, ein Webentwickler aus Köln. Ich bin ein
            frischer Absolvent des Fullstack-Bootcamps von Supercode mit Sitz in
            Düsseldorf. Dort habe ich moderne Webentwicklungstechnologien wie
            HTML, CSS, JavaScript, React, Vite und Git gelernt. Ich verwende
            Visual Studio Code als meinen bevorzugten Code-Editor.
          </p>
          <p>
            Ich habe auch einen Einblick in Webflow, ein no-code Tool zum
            Erstellen von Websites. Meine Stärken liegen im Frontend-Bereich,
            ich bin aber lernbegierig und offen für Backend-Technologien. Ich
            arbeite gerne im Team, bin kommunikativ und motiviert.
          </p>
          <p>
            Dank meiner Ausbildung bin ich in der Lage, responsive Websites und
            Webanwendungen zu entwickeln, die auf allen Geräten gut
            funktionieren. Ich habe gelernt, sauberen und gut dokumentierten
            Code zu schreiben. Meine Leidenschaft ist es, digitale Lösungen zu
            bauen, die einen Mehrwert für Nutzer schaffen.
          </p>
        </article>
        <article className="selfie_box">
          <img src={imgself} alt="profiel_bild" />
        </article>
      </section>
      <Skills />
    </main>
  );
}

export default Infos;
