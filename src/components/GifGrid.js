import React from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "./hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { data: images } = useFetchGifs(category);

  return (
    <>
      <h2 className="animate__wobble">{category}</h2>
      <div className="card-grid">
        {images.map((img) => {
          return <GifItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
