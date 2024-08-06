import MinusSVG from "../assets/minus";
import ZeroSVG from "../assets/zero";
import type { SVGProps } from "react";
import Player from "./Player";
import FlySVG from "../assets/fly";
import SpiderSVG from "../assets/spider";

interface PlayerSpace {
  space: number;
}

const Spider = ({ space }: PlayerSpace) => (
  <Player
    className="player border-none bg-transparent"
    key={space}
    childrenElement={<SpiderSVG />}
  ></Player>
);

const Fly = ({ space }: PlayerSpace) => (
  <Player
    className="player border-none bg-transparent"
    key={space}
    childrenElement={<FlySVG />}
  ></Player>
);

const Empty = ({ space }: PlayerSpace) => (
  <ZeroSVG className="zero size-full" key={space} />
);

const BackSlashSVG = ({ className }: SVGProps<string>) => (
  <MinusSVG className={`rotate-45 ${className}`} />
);
const SlashSVG = ({ className }: SVGProps<string>) => (
  <MinusSVG className={`rotate-135 ${className}`} />
);
const BarSVG = ({ className }: SVGProps<string>) => (
  <MinusSVG className={`rotate-90 ${className}`} />
);

interface CellProps {
  className?: string;
  spaceNumber?: number;
  children?: React.ReactNode;
}

function Cell({ className, children }: CellProps) {
  return <div className={className}>{children}</div>;
}

const blueprint = String.raw`/ - - O - O - O - O
/ | | | |
| / - O - O - O - O
| / | | | |
O - - O - O - O - O
| \ | | | |
| \ - O - O - O - O
\ | | | |
\ - - O - O - O - O`;

interface WebProps {
  className?: string;
  flyPosition: number;
  spiderPosition: number;
}

export default function Web({
  className,
  spiderPosition,
  flyPosition,
}: WebProps) {
  let web: Array<JSX.Element> = [];
  const barNumbers = ["0", "7", "11", "15", "19"];

  const emptyBoard = Array(21).fill(null);

  const playerSpaces = emptyBoard.map((_, i) => {
    if (i === spiderPosition) {
      return <Spider space={i} />;
    }
    if (i === flyPosition) {
      return <Fly space={i} />;
    }
    return <Empty space={i}></Empty>;
  });

  const insert = (row: number, i: number, Element?: any, barIndex?: number) => {
    let gridColumn = barIndex !== undefined ? barNumbers[barIndex] : "auto";
    web.push(
      <Cell
        className={`cell size-fit row-${row} col-start-${gridColumn}`}
        key={i}
      >
        {Element}
      </Cell>,
    );
  };

  let spaces = 0;
  let row = 1;
  let barIndex = 0;
  for (let i = 0; i < blueprint.length; i++) {
    const char = blueprint.charAt(i);
    switch (char) {
      case `/`:
        insert(row, i, <SlashSVG className="slash size-full" key={i} />);
        break;
      case " ":
        insert(
          row,
          i,
          <div className="blank size-full" key={i}>
            {" "}
          </div>,
        );
        break;
      case "-":
        insert(row, i, <MinusSVG className="minus size-full" key={i} />);
        break;
      case `O`:
        insert(row, i, playerSpaces[spaces]);
        ++spaces;
        break;
      case "\\":
        insert(
          row,
          i,
          <BackSlashSVG className="backslash size-full" key={i} />,
        );
        break;
      case "|":
        insert(row, i, <BarSVG className="bar size-full" key={i} />, barIndex);
        ++barIndex;
        break;
      default:
        ++row;
        if (row === 2 || row === 8) {
          barIndex = 1;
        } else {
          barIndex = 0;
        }
    }
  }
  return (
    <div className={`web-grid ${className}`}>
      {web}
    </div>
  );
}
