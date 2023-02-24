// Components
import Skeleton from "../ui/Skeleton";
import CommonBox from "../ui/CommonBox";

// Redux
import { useFetchDataQuery } from "../../store";

const type = "planets";

function Planets() {
  const { data, isLoading, error } = useFetchDataQuery({ type });

  if (error) {
    console.log(error);
    return <p>Something went wrong, check the console for more details.</p>;
  }

  return (
    <>
      <h1 className="my-5 text-center text-4xl font-semibold">Planets</h1>
      <div className="mx-auto flex flex-wrap justify-center gap-5">
        {isLoading ? (
          <Skeleton times={10} className="my-4 h-6 w-96" />
        ) : (
          <>
            {data.results.map((item) => (
              <CommonBox
                className="basis-96"
                type={type}
                key={item.url}
                data={item}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default Planets;
