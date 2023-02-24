import { returnId } from "../utils/string";

// Components
import DataRow from "./ui/DataRow";
import Skeleton from "./ui/Skeleton";

// Redux
import { useFetchDataQuery } from "../store";

// Router
import { Link } from "react-router-dom";

function StarshipItem({ starship }) {
  const id = returnId(starship);
  const { data, isLoading, error } = useFetchDataQuery({
    type: "starships",
    id,
  });

  if (isLoading) {
    return <Skeleton className="h-2" />;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  return (
    <DataRow>
      <Link className="hover:underline" to={`/starships/${returnId(data.url)}`}>
        {data.name}
      </Link>
    </DataRow>
  );
}

export default StarshipItem;
