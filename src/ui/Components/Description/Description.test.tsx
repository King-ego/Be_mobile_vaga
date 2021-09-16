import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Description from ".";

let container: HTMLElement | null = null;
beforeEach(() => {
  // configurar o elemento do DOM como o alvo da renderização
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // limpar na saída
  unmountComponentAtNode(container as HTMLElement);
  container?.remove();
  container = null;
});

it("render information in screen", () => {
  const setValue = jest.fn();
  act(() => {
    render(
      <Description
        setValue={setValue}
        placeholder="Pesquisa"
        titleinfo="Description"
      />,
      container
    );
  });

  expect(container?.textContent).toBe("Description");
});
