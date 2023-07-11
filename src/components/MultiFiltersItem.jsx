import React from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

function MultiFiltersItem({ className, keyItem, item, children, href }) {
  const handleClick = () => {
    if (href) {
      window.open(href, "_blank");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      key={keyItem}
      className={`multi-filters__item ${className}`}
      onClick={handleClick}
    >
      {children}
      {className.includes("tooltip") && (
        <span className="tooltiptext">{item.name}</span>
      )}
    </motion.div>
  );
}

MultiFiltersItem.propTypes = {
  className: PropTypes.string.isRequired,
  keyItem: PropTypes.string.isRequired,
  item: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.number),
    name: PropTypes.string,
    icon: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  }).isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

export default MultiFiltersItem;
