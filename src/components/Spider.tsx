import { useState } from "react";
import SpiderSVG from "../assets/spider";

interface SpiderProps {
  className?: string;
}

export default function Spider({ className }: SpiderProps) {
  const initialState: number = 0;
  const [state, setState] = useState(initialState);
  const style = { transform: `rotate(${state}deg)` };
  const add45 = () => setState((state % 360) + 45);

  return (
    <button
      style={style}
      className={`align-middle ${className}`}
      onClick={add45}
    >
      <SpiderSVG className="size-full"></SpiderSVG>
    </button>
  );
}
