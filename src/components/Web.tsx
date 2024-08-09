import { MinusSVG, BarSVG, SlashSVG, BackSlashSVG } from "../assets/lines";
import ZeroSVG from "../assets/zero";
import { Fly, Spider } from "./Players";

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
      return <Spider />;
    }
    if (i === flyPosition) {
      return <Fly />;
    }
    return <ZeroSVG></ZeroSVG>;
  });

  const insert = (row: number, i: number, Element?: any, barIndex?: number) => {
    let gridColumn = barIndex !== undefined ? barNumbers[barIndex] : "auto";
    web.push(
      <div
        style={{ gridColumn: `${gridColumn}`, gridRowStart: `${row}` }}
        className="cell"
        key={i}
      >
        {Element}
      </div>,
    );
  };

  let spaces = 0;
  let row = 1;
  let barIndex = 0;
  for (let i = 0; i < blueprint.length; i++) {
    const char = blueprint.charAt(i);
    switch (char) {
      case `/`:
        insert(row, i, <SlashSVG className="slash" key={i} />);
        break;
      case " ":
        insert(
          row,
          i,
          <div className="blank" key={i}>
            {" "}
          </div>,
        );
        break;
      case "-":
        insert(row, i, <MinusSVG className="minus" key={i} />);
        break;
      case `O`:
        insert(row, i, playerSpaces[spaces]);
        ++spaces;
        break;
      case "\\":
        insert(row, i, <BackSlashSVG className="backslash" key={i} />);
        break;
      case "|":
        insert(row, i, <BarSVG className="bar" key={i} />, barIndex);
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
  return <div className={`web-grid ${className}`}>{web}</div>;
}
