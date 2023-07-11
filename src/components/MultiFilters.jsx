import React, { useEffect } from "react";
import PropTypes from "prop-types";
import MultiFiltersItem from "./MultiFiltersItem";
import AnimatedList from "./AnimatedList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";


function MultiFilters({ items, categories, className }) {
  const [selectedFilters, setSelectedFilters] = React.useState([]);
  const [filteredItems, setFilteredItems] = React.useState(items);

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) =>
          item.category
            ? item.category.includes(selectedCategory)
            : item.technologies
            ? item.technologies.includes(selectedCategory)
            : false
        );
        return temp;
      });
      setFilteredItems([...new Set(tempItems.flat())]);
    } else {
      setFilteredItems(items);
    }
  };

  return (
    <div className="multi-filters">
      <div className="multi-filters__filters">
        {categories.map((category) => {
          return (
            <button
              className={selectedFilters.includes(category.id) ? "active" : ""}
              key={`filters-${category.id}`}
              onClick={() => handleFilterButtonClick(category.id)}
            >
              {category.name}
            </button>
          );
        })}
      </div>
      <div className="multi-filters__items">
        {items.map((item) => {
          return (
            <AnimatePresence key={`animate-${item.id}`}>
              {filteredItems.includes(item) && (
                <MultiFiltersItem
                  className={className + (item.title ? "" : " tooltip")}
                  keyItem={`items-${item.id}`}
                  item={item}
                  href={item.link ? item.link : null}
                >
                  {item.icon &&
                    (["fa-language", "fa-code", "fa-database"].includes(
                      item.icon
                    ) ? (
                      <FontAwesomeIcon
                        icon={`fa-solid ${item.icon}`}
                        size="4x"
                        fixedWidth
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={`fa-brands ${item.icon}`}
                        size="4x"
                        fixedWidth
                      />
                    ))}
                  {item.img && <img src={item.img} alt={item.name} />}
                  {item.title && <h3>{item.title}</h3>}
                  {item.technologies && (
                    <AnimatedList items={item.technologies} />
                  )}
                </MultiFiltersItem>
              )}
            </AnimatePresence>
          );
        })}
      </div>
    </div>
  );
}

MultiFilters.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.arrayOf(PropTypes.number),
      name: PropTypes.string,
      icon: PropTypes.string,
      img: PropTypes.string,
      title: PropTypes.string,
      link: PropTypes.string,
      year: PropTypes.number,
    }).isRequired
  ).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  className: PropTypes.string,
};

PropTypes.defaultProps = {
  className: "",
};

export default MultiFilters;
