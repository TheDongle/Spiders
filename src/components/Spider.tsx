import { useState } from "react";

interface SVGProps {
  className: string;
}
function SpiderSVG({ className }: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
    >
      <path d="M158.4 32.6c4.8-12.4-1.4-26.3-13.8-31s-26.3 1.4-31 13.8L81.1 100c-7.9 20.7-3 44.1 12.7 59.7l57.4 57.4L70.8 190.3c-2.4-.8-4.3-2.7-5.1-5.1L46.8 128.4C42.6 115.8 29 109 16.4 113.2S-3 131 1.2 143.6l18.9 56.8c5.6 16.7 18.7 29.8 35.4 35.4L116.1 256 55.6 276.2c-16.7 5.6-29.8 18.7-35.4 35.4L1.2 368.4C-3 381 3.8 394.6 16.4 398.8s26.2-2.6 30.4-15.2l18.9-56.8c.8-2.4 2.7-4.3 5.1-5.1l80.4-26.8L93.7 352.3C78.1 368 73.1 391.4 81.1 412l32.5 84.6c4.8 12.4 18.6 18.5 31 13.8s18.5-18.6 13.8-31l-32.5-84.6c-1.1-3-.4-6.3 1.8-8.5L160 353.9c1 52.1 43.6 94.1 96 94.1s95-41.9 96-94.1l32.3 32.3c2.2 2.2 2.9 5.6 1.8 8.5l-32.5 84.6c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8L430.9 412c7.9-20.7 3-44.1-12.7-59.7l-57.4-57.4 80.4 26.8c2.4 .8 4.3 2.7 5.1 5.1l18.9 56.8c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-18.9-56.8c-5.6-16.7-18.7-29.8-35.4-35.4L395.9 256l60.5-20.2c16.7-5.6 29.8-18.7 35.4-35.4l18.9-56.8c4.2-12.6-2.6-26.2-15.2-30.4s-26.2 2.6-30.4 15.2l-18.9 56.8c-.8 2.4-2.7 4.3-5.1 5.1l-80.4 26.8 57.4-57.4c15.6-15.6 20.6-39 12.7-59.7L398.4 15.4C393.6 3 379.8-3.2 367.4 1.6s-18.5 18.6-13.8 31l32.5 84.6c1.1 3 .4 6.3-1.8 8.5L336 174.1l0-14.1c0-31.8-18.6-59.3-45.5-72.2c-9.1-4.4-18.5 3.3-18.5 13.4l0 10.8c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-10.8c0-10.1-9.4-17.7-18.5-13.4C194.6 100.7 176 128.2 176 160l0 14.1-48.3-48.3c-2.2-2.2-2.9-5.6-1.8-8.5l32.5-84.6z" />
    </svg>
  );
}

export default function Spider() {
  const initialState: number = 0;
  const [state, setState] = useState(initialState);
  // const rotate = `rotate-${state}`;
  const style = { transform: `rotate(${state}deg)` };
  const add45 = () => setState((state % 360) + 45);

  return (
    <div className="flex min-h-[100vh] w-full">
      <button style={style} className={"size-10"} onClick={add45}>
        <SpiderSVG
          className="fill-blackOlive dark:fill-moonstoneBlue dark:stroke-blackPearl
            dark:stroke-[10px]"
        ></SpiderSVG>
      </button>
    </div>
  );
}
