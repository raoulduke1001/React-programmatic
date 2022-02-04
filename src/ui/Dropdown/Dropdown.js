import "./Dropdown.scss";
import { useClickAway, useToggle } from "react-use";
import { useRef } from "react";

function Dropdown({ button, children, closeOnClick = false }) {
  const ref = useRef(null);
  const [isDropdownOpen, setDropdownOpen] = useToggle(false);

  useClickAway(ref, () => {
    setDropdownOpen(false);
  });

  const handleContentClick = () => {
    if (closeOnClick) setDropdownOpen(false);
  };

  return (
    <div className="Dropdown" ref={ref}>
      <button className="Dropdown-button" type="button" onClick={setDropdownOpen}>
        {button}
      </button>

      {isDropdownOpen && (
        <div className="Dropdown-content" onClick={handleContentClick}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
