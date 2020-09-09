import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { GifExpertapp } from "../GifExpertapp";

describe("Pruebas en <GifExpertapp /> ", () => {
  test("debe mostrarse correctamente ", () => {
    const wrapper = shallow(<GifExpertapp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe renderizar un numero de items por ctegories recibidas", () => {
    const categories = ["Griezman", "Messi"];
    const wrapper = shallow(<GifExpertapp defaultscategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
