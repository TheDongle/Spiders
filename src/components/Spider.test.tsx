/**
 * @jest-environment jsdom
 */

import { act } from "react";
import ReactDOM from "react-dom/client";
import Spider from "./Spider";

describe("Spider", () => {
  let container: HTMLDivElement,
    dummy: HTMLButtonElement,
    button: HTMLButtonElement;
  beforeAll(async () => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  beforeEach(async () => {
    await act(async () => {
      ReactDOM.createRoot(container).render(<Spider />);
    });
    dummy = document.createElement("button");
    button = container.querySelector("button") || dummy;
  });
  it.each([1, 2, 3, 4, 5, 6, 7])("Spins when clicked", async (quant) => {
    for (let i = 0; i < quant; i++) {
      await act(async () => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    }
    expect(button.style).toHaveProperty("transform");
    expect(button.style.transform).toBe(`rotate(${quant * 45}deg)`);
  });
});
