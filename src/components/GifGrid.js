import React, { useEffect, useState } from "react";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=neymar&limit=10&api_key=I5MDZwZS4vA0bRWRJrNH0Ncu3XKZK4TV";
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map((g) => {
      return {
        id: g.id,
        title: g.title,
        url: g.images?.downsized_medium.url,
      };
    });
    setImages(gifs);
  };

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <>
      <h2>{category}</h2>

      {images.map((img) => {
        return <GifItem key={img.id} {...img} />;
      })}
    </>
  );
};
