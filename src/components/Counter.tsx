import { useState } from "react";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  disabled: boolean;
}
function Button({ onClick, className, disabled }: ButtonProps) {
  let styles;
  if (!disabled) {
    styles = `active:bg-white`;
  } else {
    styles = `hidden`;
  }
  return (
    <button
      className={`pointer-events-auto ${styles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      Play
    </button>
  );
}

interface ParagraphProps {
  innerText: string;
  className?: string;
}
function Paragraph({ innerText, className }: ParagraphProps) {
  return <p className={className}>{innerText}</p>;
}

interface CounterProps {
  className?: string;
  id?: string;
}
export default function Counter({ id, className }: CounterProps) {
  const [count, setCount] = useState(1);
  const plusOne = () => setCount(Math.min(count + 1, 10));
  return (
    <div id={id} className={`w-fit rounded text-lg font-semibold ${className}`}>
      <Button
        className="button inline rounded px-2 py-1"
        onClick={plusOne}
        disabled={count >= 10}
      ></Button>
      <Paragraph
        className="paragraph inline self-center px-2 py-1"
        innerText={`Turn number: ${count}`}
      ></Paragraph>
    </div>
  );
}
