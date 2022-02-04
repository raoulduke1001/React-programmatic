import "./Menu.scss";

import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className="Menu">
      <div className="menu-container">
        <NavLink end to="/">Кампании</NavLink>
        <NavLink to="/add-company">Добавить кампанию</NavLink>
        <NavLink to="/statistics">Статистика</NavLink>
        <NavLink to="/finance">Финансы</NavLink>
        <NavLink to="/counters">Счётчики</NavLink>
      </div>
    </div>
  );
}

export default Menu;
