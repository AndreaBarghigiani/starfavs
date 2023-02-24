import { returnId } from "../utils/string";

// Components
import DataRow from "./ui/DataRow";
import Skeleton from "./ui/Skeleton";

// Redux
import { useFetchDataQuery } from "../store";

// Router
import { Link } from "react-router-dom";

function PlanetItem({ planet }) {
  const id = returnId(planet);
  const { data, isLoading, error } = useFetchDataQuery({ type: "planets", id });

  if (isLoading) {
    return <Skeleton className="h-3" />;
  }

  return (
    <DataRow label="Planet">
      <Link className="hover:underline" to={`/planets/${returnId(data.url)}`}>
        {data.name}
      </Link>
    </DataRow>
  );
}

export default PlanetItem;
