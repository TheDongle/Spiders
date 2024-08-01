/**
 * @jest-environment jsdom
 */

import { act } from "react";
import ReactDOM from "react-dom/client";
import Spider from "./Spider";

describe("Spider", () => {
  let container: HTMLDivElement, button: HTMLButtonElement, root: ReactDOM.Root;
  beforeAll(async () => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  beforeEach(async () => {
    await act(async () => {
      root = ReactDOM.createRoot(container);
      root.render(<Spider />);
    });
    button =
      container.querySelector("button") ?? document.createElement("button");
  });
  afterEach(async () => {
    await act(async () => {
      root.unmount();
    });
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
