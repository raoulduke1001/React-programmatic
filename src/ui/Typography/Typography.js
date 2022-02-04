import "./Typography.scss";
import cx from "classnames";

function Title({
  children,
  color,
  variant,
  thin = false,
  disabled = false,
  className = "",
}) {
  return (
    <div
      className={cx("Typography", className, variant, color, {
        thin,
        disabled,
      })}
    >
      {children}
    </div>
  );
}

export default Title;
