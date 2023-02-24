import clsx from "clsx";

// Components
import FavDropdown from "./ui/FavDropdown";

// Redux
import { useSelector } from "react-redux";

// Router
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  const favs = useSelector((state) => state.favs);
  const classes = ({ isActive }) =>
    clsx("px-4 py-2 hover:bg-slate-800", { "bg-slate-800": isActive });

  return (
    <header className="my-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">
        <Link to="/">StarFavs</Link>
      </h1>

      <nav className="ml-auto flex space-x-3">
        <NavLink className={classes} to="/planets">
          Planets
        </NavLink>
        <NavLink className={classes} to="/people">
          People
        </NavLink>
        <NavLink className={classes} to="/starships">
          Starships
        </NavLink>
      </nav>

      <FavDropdown />
    </header>
  );
}

export default NavBar;
