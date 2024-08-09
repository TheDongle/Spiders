import { ComponentProps } from "react";

interface DirectionalButtonProps extends ComponentProps<"button"> {
  direction: string;
  disabled?: boolean;
}

function DirectionalButton({
  direction,
  disabled = false,
  style = {},
  ...props
}: DirectionalButtonProps) {
  const displayProp = disabled ? { display: "none" } : { display: "initial" };
  return (
    <button {...props} style={Object.assign(style, displayProp)}>
      {direction}
    </button>
  );
}

const directions = [
  "up-left",
  "up",
  "up-right",
  "left",
  "right",
  "down-left",
  "down",
  "down-right",
];


export default function ButtonPanel({
  onClick = () => {
    0;
  },
  ...props
}: ComponentProps<"button">) {
  return (
    <div className="directions-grid">
      {" "}
      {directions.map((v, i) => (
        <DirectionalButton
          {...props}
          className="trad-button"
          onClick={onClick}
          key={i}
          style={{ gridArea: `${String.fromCharCode(65 + i)}` }}
          direction={v}
        ></DirectionalButton>
      ))}
    </div>
  );
}
