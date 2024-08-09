import type { ComponentProps } from "react";

function MinusSVG({ ...props }: ComponentProps<"svg">) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
    </svg>
  );
}

const BackSlashSVG = ({ ...props }: ComponentProps<"svg">) => (
  <MinusSVG style={{ transform: "rotate(45deg)" }} {...props} />
);

const SlashSVG = ({ ...props }: ComponentProps<"svg">) => (
  <MinusSVG style={{ transform: "rotate(135deg)" }} {...props} />
);

const BarSVG = ({ ...props }: ComponentProps<"svg">) => (
  <MinusSVG style={{ transform: "rotate(90deg)" }} {...props} />
);

export { MinusSVG, BackSlashSVG, SlashSVG, BarSVG };
