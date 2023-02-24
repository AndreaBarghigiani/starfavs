// Router
import { Outlet } from "react-router-dom";

// Components
import NavBar from "../NavBar";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Layout;
