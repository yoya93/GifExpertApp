import "@testing-library/jest-dom";

import { getGifs } from "../../components/helpers/getGifs";

describe("pruebas en helpers", () => {
  test("debe traer 10 elemnetos", async () => {
    const gifs = await getGifs("autos");

    expect(gifs.length).toBe(10);
  });

  test("no debe traer  elemnetos", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
