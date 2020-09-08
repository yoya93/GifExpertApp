import React from "react";

export const GifItem = ({ id, title, url }) => {
  return (
    <>
      <img src={url} alt={title} />
    </>
  );
};
