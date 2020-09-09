import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../components/hooks/useFetchGifs";
jest.mock("../../components/hooks/useFetchGifs");

import { GifGrid } from "../../components/GifGrid";

describe("Pruebas en <GifGrid /> ", () => {
  test("debe mostrarse correctamente ", () => {
    const category = "Neymar jr";

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar los items cuando se cargan lasimagenes con useFetchGifs   ", () => {
    const category = "Neymar jr";

    const gifs = [
      {
        id: "1",
        url: "https",
        title: "cuno",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifItem").length).toBe(gifs.length);
  });
});
