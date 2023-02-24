// Components
import Skeleton from "../ui/Skeleton";
import PersonBox from "../PersonBox";

// Redux
import { useFetchDataQuery } from "../../store";

function People() {
  const { data, isLoading, error } = useFetchDataQuery({ type: "people" });

  if (error) {
    console.log(error);
    return <p>Something went wrong, check the console for more details.</p>;
  }
  return (
    <>
      <h1 className="my-5 text-center text-4xl font-semibold">People</h1>
      <div className="mx-auto flex flex-wrap justify-center gap-5">
        {isLoading ? (
          <Skeleton times={10} className="my-4 h-6 w-96" />
        ) : (
          <>
            {data.results.map((person) => (
              <PersonBox
                className="basis-96"
                key={person.url}
                person={person}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default People;
