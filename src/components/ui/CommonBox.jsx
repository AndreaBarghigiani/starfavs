import { returnId } from "../../utils/string";
import clsx from "clsx";

// Router
import { Link } from "react-router-dom";

function CommonBox({ type, data, className }) {
  const id = returnId(data.url);
  const classes = clsx(
    "flex items-center border border-slate-300 p-6 base-96",
    className
  );

  return (
    <div className={classes}>
      <Link
        to={`/${type}/${id}`}
        className="text-xl font-semibold hover:underline"
      >
        {data.name}
      </Link>
    </div>
  );
}

export default CommonBox;
