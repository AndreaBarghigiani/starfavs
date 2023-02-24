import { returnId } from "../utils/string";
import clsx from "clsx";

// Components
import FavButton from "./ui/FavButton";

// Router
import { Link } from "react-router-dom";

function PersonBox({ person, className }) {
  const id = returnId(person.url);
  const classes = clsx(
    "flex items-center border border-slate-300 p-6",
    className
  );

  return (
    <div className={classes}>
      <Link
        to={`/people/${id}`}
        className="text-xl font-semibold hover:underline"
      >
        {person.name}
      </Link>

      <FavButton className="ml-auto" person={person} />
    </div>
  );
}

export default PersonBox;
