/* eslint-disable jest/valid-expect */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Header from ".";

let container: HTMLElement | null = null;
beforeEach(() => {
  // configurar o elemento do DOM como o alvo da renderização
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Limpar ao sair
  unmountComponentAtNode(container as HTMLElement);
  container!.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<Header firstName="Ba" lastName="name" />, container);
  });

  expect(container?.textContent).toBe("Baname");

  act(() => {
    render(<Header firstName="Be" lastName="mobile" />, container);
  });
  expect(container?.textContent).toBe("Bemobile");
});
