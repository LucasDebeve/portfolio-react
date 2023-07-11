import React from "react";
import PropTypes from "prop-types";
import { content } from "../data/content";

function AnimatedList({ items }) {
  return (
    <div>
      <ul className="technologies">
        {items.map((id) => {
          // Get the name of the category
          let category = content.technologies.find((el) => el.id === id);
          return <li key={`animate-${id}`}>{category.name}</li>;
        })}
      </ul>
    </div>
  );
}

AnimatedList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default AnimatedList;
