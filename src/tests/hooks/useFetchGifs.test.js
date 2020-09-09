import React from "react";
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../components/hooks/useFetchGifs";

describe("Prueba de custom hooks", () => {
  test("debe inicializar el estado inicial ", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("neymar Jr")
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data.length).toBe(0);
    expect(loading).toBe(true);
  });

  test("debe retornar arreglo de imagenes ", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("neymar Jr")
    );
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
