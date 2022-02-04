import "./Layout.scss";
import cx from "classnames";
import { Menu, Header } from "../../widgets";
import { Loading } from "../../ui";
import { Outlet, Navigate } from "react-router-dom";
import useUser from "../../data/useUser";

function Layout({ className, children }) {
  const { isLoading, loggedOut } = useUser();

  if (isLoading) return <Loading />;

  if (!isLoading && loggedOut) return <Navigate to="/sign-in" />;

  return (
    <div className={cx("MainLayout", className)}>
      <Header />
      <Menu />

      <div className="MainLayout-content"><Outlet /></div>
    </div>
  );
}

export default Layout;
