import React from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "./hooks/useFetchGifs";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h2 className="animate__wobble">{category}</h2>

      {loading && <p> Loading</p>}

      <div className="card-grid">
        {images.map((img) => {
          return <GifItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
