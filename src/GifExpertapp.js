import React, { useState } from "react";

import "./index.css";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertapp = () => {
  const [categories, setCategories] = useState(["Frutas"]);

  return (
    <>
      <h1>GifExpertapp </h1>

      <AddCategory setCategories={setCategories} />

      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
