import React from "react";
import PropTypes from "prop-types";

function Fade({ visible, children }) {
  const [showChildren, setShowChildren] = React.useState(visible);

  React.useEffect(() => {
    if (visible) {
      setShowChildren(true);
    } else {
      const timer = setTimeout(() => {
        setShowChildren(false);
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [visible]);

  let className = "fade";
  if (!visible) {
    className += " out";
  }
  return <div className={className}>{showChildren && children}</div>;
}

Fade.propTypes = {
    visible: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default Fade;
