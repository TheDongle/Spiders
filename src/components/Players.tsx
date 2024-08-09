import { useState } from "react";
import type { ComponentProps, ReactNode } from "react";
import FlySVG from "../assets/fly";
import SpiderSVG from "../assets/spider";

interface PlayerProps extends ComponentProps<"button"> {
  childrenElement: ReactNode;
}

function Player({ childrenElement }: PlayerProps) {
  const initialState: number = 0;
  const [state, setState] = useState(initialState);
  const add45 = () => setState((state % 360) + 45);

  return (
    <button style={{ transform: `rotate(${state}deg)` }} onClick={add45}>
      {childrenElement}
    </button>
  );
}

const Spider = ({ ...props }: ComponentProps<"button">) => (
  <Player {...props} childrenElement={<SpiderSVG />}></Player>
);

const Fly = ({ ...props }: ComponentProps<"button">) => (
  <Player {...props} childrenElement={<FlySVG />}></Player>
);

export { Spider, Fly };
