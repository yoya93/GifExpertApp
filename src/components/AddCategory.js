import React, { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [imputValue, setImputValue] = useState("Hola Mundo");

  const handleImputChange = (e) => {
    setImputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories((cate) => {
      setCategories([imputValue, ...cate]);
      setImputValue("");
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={imputValue} onChange={handleImputChange} />
    </form>
  );
};
