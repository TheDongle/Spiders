// import spider from "./assets/spider.svg";
import Spider from "./components/Spider";
import Counter from "./components/Counter";
import Web from "./components/Web";

// const spaces = 64;

export default function App() {
  return (
    <div className="mx-auto flex h-full min-w-min max-w-[42rem] flex-col gap-1 align-middle">
      <div className="bg-teal aspect-[20/4] place-content-center rounded-lg text-center">
        <h1 className="my-auto text-5xl lg:text-7xl">Spider Game</h1>
      </div>
      <Web
        className="aspect-square h-4/6"
        spiderPosition={0}
        spider={<Spider className="border-none bg-transparent" />}
      />
      <div className="bg-teal aspect-[20/4] place-content-center rounded-lg">
        <Counter className="mx-auto rounded bg-white leading-none" />
      </div>
    </div>
  );
}
