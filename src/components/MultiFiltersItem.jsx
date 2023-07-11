import React from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

function MultiFiltersItem({ keyItem, item, children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      key={keyItem}
      className="multi-filters__item tooltip"
    >
      {children}
      <span className="tooltiptext">{item.name}</span>
    </motion.div>
  );
}

MultiFiltersItem.propTypes = {
  keyItem: PropTypes.string.isRequired,
  item: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.number).isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default MultiFiltersItem;
