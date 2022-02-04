import "./Button.scss";
import cx from "classnames";

function Button({ variant = "primary", className, children, ...props }) {
  return (
    <button {...props} className={cx("Button", variant, className)}>
      {children}
    </button>
  );
}

export default Button;
