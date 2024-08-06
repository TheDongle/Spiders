import SlashSVG from "../assets/slash";
import BackSlashSVG from "../assets/backslash";
import BarSVG from "../assets/bar";
import MinusSVG from "../assets/minus";
import ZeroSVG from "../assets/zero";

interface CellProps {
  className?: string;
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
  spider: React.JSX.Element;
  spiderPosition: number;
}

export default function Web({ className, spider, spiderPosition }: WebProps) {
  let web: Array<JSX.Element> = [];
  const barNumbers = ["0", "7", "11", "15", "19"];
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
        insert(
          row,
          i,
          <SlashSVG className="slash size-full" key={i} />,
        );
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
        insert(
          row,
          i,
          <MinusSVG className="minus size-full" key={i} />,
        );
        break;
      case `O`:
        if (spaces === spiderPosition) {
          insert(row, i, spider);
        } else {
          insert(
            row,
            i,
            <ZeroSVG className="zero size-full" key={i} />,
          );
        }
        ++spaces;
        break;
      case "\\":
        insert(
          row,
          i,
          <BackSlashSVG
            className="backslash size-full"
            key={i}
          />,
        );
        break;
      case "|":
        insert(
          row,
          i,
          <BarSVG className="bar size-full" key={i} />,
          barIndex,
        );
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
