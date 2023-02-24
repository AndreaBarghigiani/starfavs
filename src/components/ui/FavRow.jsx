import { returnPath } from "../../utils/string";
import { forwardRef } from "react";

// Components
import Skeleton from "./Skeleton";

// Redux
import { useFetchDataQuery, removeFav } from "../../store";
import { useDispatch } from "react-redux";

// Router
import { Link } from "react-router-dom";

const FavRow = forwardRef(function FavRow({ url }, ref) {
  const dispatch = useDispatch();
  const [type, id] = returnPath(url);
  const { data, isLoading, error } = useFetchDataQuery({ type, id });

  const handleRemoveFav = () => {
    dispatch(removeFav(data));
  };

  if (isLoading) {
    return <Skeleton className="h-2" />;
  }
  return (
    <div
      ref={ref}
      className="flex items-center justify-between border-b p-2 hover:bg-slate-700"
    >
      <Link to={`${type}/${id}`}>{data.name}</Link>

      <button onClick={handleRemoveFav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
});

export default FavRow;
