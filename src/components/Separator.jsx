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
  img: "../public/img/wave-line.svg",
};
export default Separator;
