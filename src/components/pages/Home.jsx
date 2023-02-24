// Components
import PersonBox from "../PersonBox";
import Search from "../Search";
import Skeleton from "../ui/Skeleton";

// Redux
import { useFetchDataQuery } from "../../store/api/starWarsApi";

function Home() {
  const { data, isLoading, error } = useFetchDataQuery({ type: "people" });
  return (
    <>
      <h1 className="text-bold text-center text-4xl">
        Your StarWars journey begins now
      </h1>

      <div className="mx-auto my-5 flex max-w-md flex-col items-center">
        <h3>Looking for something specific?</h3>
        <Search />
      </div>

      <div className="mx-auto flex flex-wrap justify-center gap-5">
        {isLoading ? (
          <Skeleton times={10} className="my-4 h-6 w-96" />
        ) : (
          <>
            {data.results.map((person) => (
              <PersonBox
                key={person.url}
                className="basis-96"
                person={person}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default Home;
