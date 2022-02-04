import "./SortIcon.scss";
import cx from "classnames";
import { ReactComponent as DropSvg } from "../../assets/images/drop-sort.svg";

function SortIcon({ isSortedDesc, isSorted }) {
  return (
    <span className="SortIcon">
      <DropSvg className={cx({ active: isSorted && isSortedDesc === false })} />
      <DropSvg className={cx({ active: isSorted && isSortedDesc === true })} />
    </span>
  );
}

export default SortIcon;
