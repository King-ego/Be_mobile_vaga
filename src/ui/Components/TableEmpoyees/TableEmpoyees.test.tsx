/* eslint-disable jest/valid-expect */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TableEmpoyees from ".";

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
  const empo = [
    {
      id: 1,
      name: "João",
      job: "Back-end",
      admission_date: "2019-12-02T00:00:00.000Z",
      phone: "5551234567890",
      image:
        "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
    },
  ];
  act(() => {
    render(
      <TableEmpoyees
        admission_date="22/02/2002"
        image="http://google.com"
        job="fabric"
        name="Carlos"
        phone="99999999"
        value="Carlos"
        empoyee={empo}
      />,
      container
    );
  });

  expect(container?.textContent).toBe(
    "HTTP://GOOGLE.COMCARLOSFABRIC22/02/200299999999Not Found"
  );

});
