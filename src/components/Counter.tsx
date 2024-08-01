import { useState } from "react";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  disabled: boolean;
}
function Button({ onClick, className, disabled }: ButtonProps) {
  let styles;
  if (!disabled) {
    styles = `bg-mossGreen hover:ring hover:ring-forestGreen
    active:bg-dairyCream dark:bg-moonstoneBlue
    dark:hover:ring-colonialWhite`;
  } else {
    styles = `bg-forestGreen dark:bg-midnightBlue`;
  }
  return (
    <button
      className={`pointer-events-auto dark:border-midnightBlue ${styles} ${className}`}
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
  id?: string;
}
export default function Counter({ id }: CounterProps) {
  const [count, setCount] = useState(1);
  const plusOne = () => setCount(Math.min(count + 1, 10));
  return (
    <div
      id={id}
      className="w-fit rounded border-2 border-black text-lg font-semibold
        dark:border-midnightBlue dark:bg-colonialWhite dark:text-blackPearl"
    >
      <Button
        className="button inline border-r-2 border-r-black px-2 py-1"
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
