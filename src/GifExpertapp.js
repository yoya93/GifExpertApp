import React, { useState } from "react";

import "./index.css";
import { AddCategory } from "./components/AddCategory";

export const GifExpertapp = () => {
  const [categories, setCategories] = useState([
    "Frutas",
    "Vegetales",
    "Pastas",
  ]);

  return (
    <>
      <h1>GifExpertapp </h1>

      <AddCategory setCategories={setCategories} />

      <hr />

      <ol>
        {categories.map((categorie) => (
          <li key={categorie}> {categorie} </li>
        ))}
      </ol>
    </>
  );
};
