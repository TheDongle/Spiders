/**
 * @jest-environment jsdom
 */

import { act } from "react";
import ReactDOM from "react-dom/client";
import Counter from "./GameInfo";

describe("Counter", () => {
  let container: HTMLDivElement,
    button: HTMLButtonElement,
    paragraph: HTMLParagraphElement,
    counter: HTMLDivElement,
    root: ReactDOM.Root;
  beforeAll(async () => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  beforeEach(async () => {
    await act(async () => {
      root = ReactDOM.createRoot(container);
      root.render(<Counter id="counter" />);
    });
    counter =
      container.querySelector("#counter") ?? document.createElement("div");
    button =
      counter.querySelector("button") ?? document.createElement("button");
    paragraph = counter.querySelector("p") ?? document.createElement("p");
  });
  afterEach(async () => {
    await act(async () => {
      root.unmount();
    });
  });
  it("starts on turn 1", async () => {
    expect(paragraph.textContent).toBe(`Turn number: 1`);
  });
  it.each([1, 2, 3, 9])("Counts up to ten when clicked", async (count) => {
    for (let i = 0; i < count; i++) {
      await act(async () => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    }
    expect(paragraph.textContent).toBe(`Turn number: ${count + 1}`);
  });
  it("Shouldn't count beyond 10", async () => {
    for (let i = 0; i < 10; i++) {
      await act(async () => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    }
    expect(paragraph.textContent).not.toBe(`Turn number: ${11}`);
    expect(button.disabled).toBe(true);
  });
});
