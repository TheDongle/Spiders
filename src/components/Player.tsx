import { useState } from "react";

export interface PlayerProps {
  childrenElement: React.JSX.Element;
  className?: string;
}

export default function Player({ childrenElement, className }: PlayerProps) {
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
      {childrenElement}
    </button>
  );
}
