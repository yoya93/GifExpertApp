import React from "react";

export const GifItem = ({ id, title, url }) => {
  return (
    <div className="card  animate__heartBeat">
      <img src={url} alt={title} />
    </div>
  );
};
