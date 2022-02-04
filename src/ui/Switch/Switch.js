import "./Switch.scss";
import cx from "classnames";

function Switch({ value, onChange }) {
  const handleClick = () => {
    if (onChange) onChange(!value);
  };

  return (
    <div
      className={cx("Switch", { isSelectedSlider: value })}
      onClick={handleClick}
    >
      <div className="slider"></div>
    </div>
  );
}

export default Switch;
