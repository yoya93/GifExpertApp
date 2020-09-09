import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { GifItem } from "../../components/GifItem";

describe("Pruebas en <GifItem />", () => {
  const url = "https://youtube.com";
  const title = "titulo";
  const wrapper = shallow(<GifItem url={url} title={title} />);

  test("debe de mostrar <GifItem /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("dede mostrar el title en <p>", () => {
    const p = wrapper.find("p").text().trim();

    expect(p).toBe(title);
  });

  test("debe tener en la imagen el alt y el src ", () => {
    const img = wrapper.find("img");

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("debe tener el div la clase:  animate__heartBeat", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");

    expect(className.includes("animate__heartBeat")).toBe(true);
  });
});
