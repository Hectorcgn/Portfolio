import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/form1.svg";

function Navbar() {
  return (
    <header>
      <section className="navbar_section">
        <article className="logo_name_box">
          <img src={logo} alt="Main Applogo" className="pulsate" />
          <h1>Hector</h1>
        </article>
        <ul>
          <li>
            <Link to={"/"}>
              <h2>Startseite</h2>
            </Link>
          </li>
          <li>
            <Link to={"/projekte"}>
              <h2>Projekte</h2>
            </Link>
          </li>
          <li>
            <Link to={"/infos"}>
              <h2>Infos über mich</h2>
            </Link>
          </li>
          <li>
            <Link to={"/kontakt"}>
              <h2>Kontakt</h2>
            </Link>
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Navbar;
