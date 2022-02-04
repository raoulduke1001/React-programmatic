import "./RadioButton.scss";
import cx from "classnames";
import { Typography } from "../";

function RadioButton({ children, isSelectedRadio, value, onChange }) {
  const handleClick = () => {
    if (onChange) onChange(value);
  };

  return (
    <div className="RadioButton" onClick={handleClick}>
      <div className={cx("radio", { isSelectedRadio })} />
      {children && (
        <Typography variant="body1" color="dark-gray">
          {children}
        </Typography>
      )}
    </div>
  );
}

export default RadioButton;
