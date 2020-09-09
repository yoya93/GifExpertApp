import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { AddCategory } from "../../components/AddCategory";

describe("pruebas en <AddCategory />", () => {
  const setCategories = jest.fn(); // tracking de la function
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    // reseteamos el componete despues de cada test
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe cambiar el input", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";

    input.simulate("change", {
      target: {
        value: value,
      },
    });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("debe disparar funcion setCategories", () => {
    const form = wrapper.find("form");

    const preventDefault = () => {};

    form.simulate("submit", { preventDefault });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar setCategories y limpiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Neymar Jr";

    input.simulate("change", {
      target: {
        value: value,
      },
    });

    const form = wrapper.find("form");
    const preventDefault = () => {};

    form.simulate("submit", { preventDefault });

    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); // asegurarme que se lla,a una funcion
    expect(setCategories).toHaveBeenCalled();
    expect(input.props().value).toBe("");
  });
});
