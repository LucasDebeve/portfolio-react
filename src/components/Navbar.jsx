import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Portfolio
      </a>
      <button className="navbar__toggler" type="button" onClick={handleToggle}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={navbarOpen ? '' : 'hidden'} id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="navbar__link" href="#about">
            A propos
          </a>
          <a className="navbar__link" href="#skills">
            Mes compétences
          </a>
          <a className="navbar__link" href="#projects">
            Mes projets
          </a>
          <a className="navbar__link" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
