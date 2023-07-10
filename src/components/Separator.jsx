import React from "react";
import PropTypes from "prop-types";

function Separator({ img }) {
  return (
    <div className="separator">
      <img src={img} alt="separator" />
    </div>
  );
}

Separator.propTypes = {
  img: PropTypes.string,
};

Separator.defaultProps = {
  img: "https://www.sciencenews.org/wp-content/uploads/2022/11/top-sapce-images_feat-1030x580.jpg",
};
export default Separator;
