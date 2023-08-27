import React from "react";
import "./Skills.scss";
import { useEffect } from "react";
import htmlimg from "../../../assets/img/html-1.svg";
import scssimg from "../../../assets/img/sass-1.svg";
import javascripimg from "../../../assets/img/javascript-1.svg";
import reactimg from "../../../assets/img/react-2.svg";
import githubimg from "../../../assets/img/github.svg";
import gitimg from "../../../assets/img/git.svg";
import figmabimg from "../../../assets/img/Figma.svg";

function Skills() {
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
    <section className="skill_box">
      <article className="header_box">
        <h1>Meine Sklills</h1>
        <span></span>
      </article>
      <ul className="Sprachen_liste">
        <h2>Sprachen</h2>
        <li className="slide-left">
          <article className="text_box">
            <img src={htmlimg} alt="html Image" className="logos" />
            <h3>Html</h3>
          </article>
          <p>Level:</p>
          <article className="levelbox">
            <span className="finisch"></span>
            <span className="finisch"></span>
            <span className="finisch"></span>
            <span className="finisch"></span>
            <span></span>
          </article>
        </li>
        <li className="slide-right">
          <article className="text_box">
            <img src={scssimg} alt="sass Image" className="logos" />
            <h3>Sass</h3>
          </article>
          <p>Level:</p>
          <article className="levelbox">
            <span className="finisch"></span>
            <span className="finisch"></span>
            <span className="finisch"></span>
            <span></span>
            <span></span>
          </article>
        </li>
        <li className="slide-left">
          <article className="text_box">
            <img src={javascripimg} alt="javascrip Image" className="logos" />
            <h3>Javascrip</h3>
          </article>
          <p>Level:</p>
          <article className="levelbox">
            <span className="finisch"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </article>
        </li>
      </ul>
      <h2>Frameworks</h2>
      <ul className="framework_liste">
        <li className="slide-right">
          <article className="text_box">
            <img src={reactimg} alt="react Image" className="logos" />
            <h3>React</h3>
          </article>
          <p>level:</p>
          <article className="levelbox">
            <span className="finisch"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </article>
        </li>
      </ul>
      <h2>tools</h2>
      <ul className="tool_liste">
        <li className="slide-left">
          <article className="text_box">
            <img src={githubimg} alt="Github Image" className="logos" />
            <h3>GitHub</h3>
          </article>
          <p>level:</p>
          <article className="levelbox">
            <span className="finisch"></span>
            <span className="finisch"></span>
            <span></span>
            <span></span>
            <span></span>
          </article>
        </li>
        <li className="slide-right">
          <article className="text_box">
            <img src={gitimg} alt="Git Image" className="logos" />
            <h3>Git</h3>
          </article>
          <p>level:</p>
          <article className="levelbox">
            <span className="finisch"></span>
            <span className="finisch"></span>
            <span></span>
            <span></span>
            <span></span>
          </article>
        </li>
        <li className="slide-left">
          <article className="text_box">
            <img src={figmabimg} alt=" Figma Image" />
            <h3>Figma</h3>
          </article>
          <p>level:</p>
          <article className="levelbox">
            <span className="finisch"></span>
            <span className="finisch"></span>
            <span className="finisch"></span>
            <span></span>
            <span></span>
          </article>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
