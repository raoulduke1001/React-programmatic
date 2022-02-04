import "./Checkbox.scss";
import cx from "classnames";

import { Typography } from "../../ui";
import { ReactComponent as CheckboxIcon } from "../../assets/images/checkbox.svg";

function Checkbox({ variant, children, value, onChange }) {
  const handleClick = () => {
    if (onChange) onChange();
  };

  return (
    <div className="Checkbox" onClick={handleClick}>
      <div className={cx("mark", variant, { isSelected: value })}>
        <CheckboxIcon />
      </div>
      {children && (
        <Typography variant="body1" color="dark-gray">
          {children}
        </Typography>
      )}
    </div>
  );
}

export default Checkbox;
