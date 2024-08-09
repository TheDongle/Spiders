import type { ComponentProps } from "react";

interface FillableParagraphProps extends ComponentProps<"p"> {
  text: string;
}
function FillableParagraph({ text, ...props }: FillableParagraphProps) {
  return <p {...props}>{text}</p>;
}

interface GameInfoProps extends ComponentProps<"div"> {
  count: number;
  direction: string;
}

export default function GameInfo({
  count,
  direction,
  ...props
}: GameInfoProps) {
  return (
    <div {...props} className="game-info">
      <FillableParagraph text={`Turn number: ${count}`}></FillableParagraph>
      <FillableParagraph text={`Last Move: ${direction}`}></FillableParagraph>
    </div>
  );
}
