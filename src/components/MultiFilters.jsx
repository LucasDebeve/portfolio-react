import React, { useEffect } from "react";
import PropTypes from "prop-types";
import MultiFiltersItem from "./MultiFiltersItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "./Fade";

function MultiFilters({ items, categories }) {
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
          item.category.includes(selectedCategory)
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
            <Fade visible={filteredItems.includes(item)} key={`fade-${item.id}`}>
              <MultiFiltersItem keyItem={`items-${item.id}`} item={item}>
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
              </MultiFiltersItem>
            </Fade>
          );
        })}
      </div>
    </div>
  );
}

MultiFilters.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.arrayOf(PropTypes.number).isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string,
      img: PropTypes.string,
    }).isRequired
  ).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MultiFilters;
