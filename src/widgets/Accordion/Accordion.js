import "./Accordion.scss";
import { useState } from "react";
import cx from "classnames";

import { Typography } from "../../ui";

import { ReactComponent as ArrowIcon } from "../../assets/images/arrow-gray.svg";

function Accordion({ title, shown, segment, index, items, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Accordion">
      <div
        className={cx("accordion-header", {
          "accordion-header__open": isOpen,
        })}
        onClick={toggleAccordion}
      >
        <ArrowIcon className="icon" />
        <Typography className="title" variant="body1" color="dark-gray">
          {title}
        </Typography>

        {items && (
          <div className="wrapp">
            <div className="item">
              <Typography variant="body1" color="dark-gray">
                {shown}
              </Typography>
            </div>
            <div className="item">
              <Typography variant="body1" color="dark-gray">
                {segment}
              </Typography>
            </div>
            <div className="item">
              <Typography variant="body1" color="blue">
                {index}
              </Typography>
            </div>
          </div>
        )}
      </div>

      <div
        className={cx("accordion-content", {
          "accordion-content__open": isOpen,
        })}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
