import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer({ networks }) {
  return (
    <footer>
      <div className="footer__networks">
        {networks.map((network) => {
          return (
            <a
              key={`network-${network.id}`}
              href={network.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={`fa-brands ${network.icon}`}
                size="3x"
                fixedWidth
              />
            </a>
          );
        })}
      </div>
    </footer>
  );
}

Footer.propTypes = {
  networks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Footer;
