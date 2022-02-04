import "./Header.scss";
import { Link } from "react-router-dom";
import { User, Notification } from "../";
import useLogout from "../../hooks/useLogout"

import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";
import { ReactComponent as ExitIcon } from "../../assets/images/exit.svg";

export default function Header() {
  const logout = useLogout()

  return (
    <header className="Header">
      <div className="header-container">
        <Link className="icon" to="/">
          <LogoIcon />
        </Link>

        <div className="profile">
          <div className="wrapp">
            <div className="balance">Баланс:</div>
            <div className="sum">100 000,00 ₽</div>
          </div>

          <Notification />

          <User />

          <div className="exit">
            <button type="button" onClick={logout}>
              <ExitIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
