import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Card({ id, title, children }) {
  return (
    <section className="card" id={id}>
      <h1 className="card__title">{title}</h1>
      <motion.div
        className="card__content"
        initial={{ opacity: 0, y: 10}}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration: 1, ease: "easeInOut"}}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
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
