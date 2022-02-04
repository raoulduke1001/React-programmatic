import ReactDOM from "react-dom";
import "./Modal.scss";

import { ReactComponent as CloseIcon } from "../../assets/images/close.svg";

function Modal({ children, onClose, title, isOpen }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="wrapper">
        <div className="title">
          {title}
          <button className="close" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
