import React from "react";
import PropTypes from "prop-types";

function Card({ id, title, children }) {
  return (
    <section className="card" id={id}>
      <h1 className="card__title">{title}</h1>
      <div className="card__content">{children}</div>
    </section>
  );
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Card.defaultProps = {
    title: "",
};

export default Card;
