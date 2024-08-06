import Counter from "./components/Counter";
import Web from "./components/Web";

function startingPositions() {
  const spiderPosition = Math.floor(Math.random() * 21);
  const flyPosition =
    spiderPosition < 19 ? spiderPosition + 2 : spiderPosition - 2;
  return { spiderPosition, flyPosition };
}

export default function App() {
  const { spiderPosition, flyPosition } = startingPositions();
  return (
    <div className="mx-auto flex h-full min-w-min max-w-[42rem] flex-col gap-1 align-middle">
      <div className="aspect-[11/2] place-content-center rounded-lg bg-teal text-center">
        <h1 className="my-auto text-5xl lg:text-7xl">Spider Game</h1>
      </div>
      <Web
        className="aspect-square"
        spiderPosition={spiderPosition}
        flyPosition={flyPosition}
      />
      <div className="aspect-[11/2] place-content-center rounded-lg bg-teal">
        <Counter className="mx-auto rounded bg-white leading-none" />
      </div>
    </div>
  );
}
