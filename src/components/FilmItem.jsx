import { returnId } from "../utils/string";

// Components
import DataRow from "./ui/DataRow";
import Skeleton from "./ui/Skeleton";

// Redux
import { useFetchDataQuery } from "../store";

function FilmItem({ film }) {
  const id = returnId(film);
  const { data, isLoading, error } = useFetchDataQuery({
    type: "films",
    id,
  });

  if (isLoading) {
    return <Skeleton className="h-2 w-full" />;
  }

  return <DataRow>{data.title}</DataRow>;
}

export default FilmItem;
