import Web from "./components/Web";
import { useState } from "react";
import ButtonPanel from "./components/ButtonPanel";
import GameInfo from "./components/GameInfo";

const startingPositions = () => {
  const initialSpiderPosition = Math.floor(Math.random() * 21);
  const initialFlyPosition =
    initialSpiderPosition < 19
      ? initialSpiderPosition + 2
      : initialSpiderPosition - 2;
  return [initialSpiderPosition, initialFlyPosition];
};
const [initialSpiderPosition, initialFlyPosition] = startingPositions();

const directionLookup: Array<{ [key: string]: number }> = [
  // Row 1
  { right: 1, down: 4, left: 8 },
  { right: 2, down: 5, left: 0 },
  { right: 3, down: 6, left: 1 },
  { down: 7, left: 2 },
  // Row 3
  { up: 0, right: 5, down: 9, "down-left": 8 },
  { up: 1, right: 6, down: 10, left: 4 },
  { up: 2, right: 7, down: 11, left: 5 },
  { up: 3, down: 12, left: 6 },
  // Row 5
  { up: 0, "up-right": 4, right: 9, "down-right": 13, down: 17 },
  { up: 4, right: 10, down: 13, left: 8 },
  { up: 5, right: 11, down: 14, left: 9 },
  { up: 6, right: 12, down: 15, left: 10 },
  { up: 7, down: 16, left: 11 },
  // Row 7
  { up: 9, right: 14, down: 17, "up-left": 8 },
  { up: 10, right: 15, down: 18, left: 13 },
  { up: 11, right: 16, down: 19, left: 14 },
  { up: 12, down: 20, left: 15 },
  // Row 9
  { up: 13, right: 18, left: 8 },
  { up: 14, right: 19, left: 17 },
  { up: 15, right: 20, left: 18 },
  { up: 16, left: 19 },
];

export default function App() {
  const [spiderPosition, setSpiderPosition] = useState(initialSpiderPosition);
  const [flyPosition, setFlyPosition] = useState(initialFlyPosition);

  const flyAI = () => {
    const values = Object.values(directionLookup[flyPosition]);
    return values[Math.floor(Math.random() * values.length)];
  };

  const [count, setCount] = useState(1);
  const [direction, setDirection] = useState("");

  const onClick = (e: React.SyntheticEvent): void => {
    const target = e.target as typeof e.target & {
      innerText: string;
    };
    if (directionLookup[spiderPosition][target.innerText]) {
      setDirection(target.innerText);
      setSpiderPosition(directionLookup[spiderPosition][target.innerText]);
      setFlyPosition(flyAI());
      setCount(Math.min(count + 1, 10));
    }
  };

  if (flyPosition === spiderPosition) {
    console.log("You win");
  }

  return (
    <div className="mx-auto flex h-[100vh] min-w-min max-w-[42rem] flex-col gap-2 align-middle">
      <div
        className="nothing aspect-[20/1] rounded-lg bg-teal"
        aria-hidden="true"
      ></div>
      <div className="place-content-center text-center">
        <h1 className="my-auto text-4xl lg:text-6xl">Spider Game</h1>
      </div>
      <Web
        className="aspect-square max-h-[60vh]"
        spiderPosition={spiderPosition}
        flyPosition={flyPosition}
      />
      <div id="controls" className="aspect-[11/3] leading-none">
        <ButtonPanel
          disabled={count >= 10}
          onClick={(event) => onClick(event)}
        ></ButtonPanel>
        <GameInfo count={count} direction={direction}></GameInfo>
      </div>
      <div
        className="nothing aspect-[20/1] rounded-lg bg-teal"
        aria-hidden="true"
      ></div>
    </div>
  );
}
