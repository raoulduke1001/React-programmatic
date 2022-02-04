import "./Finance.scss";
import { NavLink, Outlet, useLocation, Navigate } from "react-router-dom";

import { Typography } from "../../ui";

function Finance() {
  const { pathname } = useLocation();

  if (pathname === "/finance") {
    return <Navigate to="/finance/replenishment" />;
  }

  return (
      <div className="Finance">
        <Typography variant="h1" color="dark-gray">
          Финансы
        </Typography>
        <div className="nav">
          <NavLink to="/finance/replenishment">Пополнение</NavLink>
          <NavLink to="/finance/balance-history">История баланса</NavLink>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
  );
}

export default Finance;
