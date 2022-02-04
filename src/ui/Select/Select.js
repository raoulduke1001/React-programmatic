import "./Select.scss";
import cx from "classnames";
import { useState, useEffect } from "react";

import { Dropdown } from "../";
import { ReactComponent as DeltaIcon } from "../../assets/images/arrow-gray.svg";
import { ReactComponent as CheckboxIcon } from "../../assets/images/checkbox.svg";

function Select({ placeholder, variant = "white", options, onChange }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (onChange) onChange(selectedOptions);
  }, [selectedOptions]);

  const handleSelect = (obj) => {
    if (selectedOptions.some(({ value }) => value === obj.value)) {
      setSelectedOptions((options) =>
        options.filter(({ value }) => value !== obj.value)
      );
    } else {
      setSelectedOptions((options) => options.concat(obj));
    }
  };

  return (
    <div className={cx("Select", variant)}>
      <Dropdown
        button={
          <div className="select">
            {selectedOptions.length === 0 && (
              <div className="placeholder-value">
                <div className="placeholder">{placeholder}</div>
                <DeltaIcon />
              </div>
            )}
            {selectedOptions.map((obj, index) => (
              <span key={index}>
                {obj.label}
                {index + 1 !== selectedOptions.length && ","}
              </span>
            ))}
          </div>
        }
      >
        {options &&
          options.map((obj, index) => (
            <button key={index} type="button" onClick={() => handleSelect(obj)}>
              <span
                className={cx("rectangle", {
                  selected: selectedOptions.some((option) => {
                    return option.value === obj.value;
                  }),
                })}
              >
                <CheckboxIcon
                  className={cx("rectangle-icon", {
                    selected: "rectangle-icon__visible",
                  })}
                />
              </span>
              {obj.label}
            </button>
          ))}
      </Dropdown>
    </div>
  );
}

export default Select;
