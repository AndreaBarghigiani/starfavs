import { returnId } from "../utils/string";

// Components
import DataRow from "./ui/DataRow";
import Skeleton from "./ui/Skeleton";

// Redux
import { useFetchDataQuery } from "../store";

function VehicleItem({ vehicle }) {
  const id = returnId(vehicle);
  const { data, isLoading, error } = useFetchDataQuery({
    type: "vehicles",
    id,
  });

  if (isLoading) {
    return <Skeleton className="h-2" />;
  }

  return <DataRow>{data.name}</DataRow>;
}

export default VehicleItem;
