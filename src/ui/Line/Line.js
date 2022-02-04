import "./Line.scss";
import cx from "classnames";

function Line({ variant, className, ...props }) {
  return <div {...props} className={cx("Line", variant, className)}></div>;
}

export default Line;
