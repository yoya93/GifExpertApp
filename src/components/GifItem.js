import React from "react";
import PropTypes from "prop-types";

export const GifItem = ({ title, url }) => {
  return (
    <div className="card  animate__heartBeat">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

// PrimeraApp.defaultProps = {
//   title: "titulo",
//   url: "https://youtube.com",
// };
