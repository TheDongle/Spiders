// /**
//  * @jest-environment jsdom
//  */

// import { act } from "react";
// import ReactDOM from "react-dom/client";
// import Web from "./Web";


// const mockFly = () => <button id="fly"></button>
// const mockSpider = () => <button id="spider"></button>

// // There are 21 spaces
// // Expect spider will always start 2 spaces away from fly
// // Positions can be random

// describe("Web", () => {
//   let container: HTMLDivElement,
//     div: HTMLDivElement | null,
//     root: ReactDOM.Root;
//   beforeAll(async () => {
//     container = document.createElement("div");
//     document.body.appendChild(container);
//   });
//   beforeEach(async () => {
//     await act(async () => {
//       root = ReactDOM.createRoot(container);
//       root.render(<Web />);
//     });
//     div = container.querySelector(".web");
//   });
//   afterEach(async () => {
//     await act(async () => {
//       root.unmount();
//     });
//   });
//   it("Should exist", () => {
//     console.log(div);
//     expect(div).toBeDefined();
//   });
// });
