import React from "react";
import PropTypes from "prop-types";

function MultiFiltersItem({ keyItem, item, children }) {
  return (
    <div key={keyItem} className="multi-filters__item tooltip">
      {children}
      <span className="tooltiptext">{item.name}</span>
    </div>
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
