import "./Profile.scss";
import { NavLink, Outlet } from "react-router-dom";

import { Typography } from "../../ui";
import { CardWhite } from "../../widgets";

function Profile() {
  return (
      <div className="Profile">
        <Typography variant="h1" color="dark-gray">
          Профиль
        </Typography>
        <div className="nav">
          <NavLink to="contact-details">Контактная информация</NavLink>
          <NavLink to="bank-audits">Банковские ревизиты</NavLink>
          <NavLink to="settings">Настройки</NavLink>
        </div>
        <CardWhite>
          <Outlet />
        </CardWhite>
      </div>
  );
}

export default Profile;
