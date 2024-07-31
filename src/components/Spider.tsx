import { useState } from "react";

export default function Spider() {
  const initialState: number = 0;
  const [state, setState] = useState(initialState);
  // const rotate = `rotate-${state}`;
  const style = { transform: `rotate(${state}deg)` };
  const add45 = () => setState((state % 360) + 45);

  return (
    <div className="flex min-h-[100vh] w-full">
      <button
        style={style}
        className={"bg-spider size-10 bg-red-400"}
        onClick={add45}
      ></button>
    </div>
  );
}
