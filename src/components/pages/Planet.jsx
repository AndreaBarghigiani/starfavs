// Components
import FilmItem from "../FilmItem";
import Skeleton from "../ui/Skeleton";
import LoremIpsum from "../ui/LoremIpsum";
import DataRow from "../ui/DataRow";

// Redux
import { useRandomPhotoQuery, useFetchDataQuery } from "../../store";

// Router
import { useParams, Link } from "react-router-dom";
import PersonBox from "../PersonBox";

const type = "planets";

function Starship() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchDataQuery({ type, id });
  const {
    data: image,
    isLoading: isLoadingImage,
    errorImage,
  } = useRandomPhotoQuery(`${type}${id}`);

  if (isLoading || isLoadingImage) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center space-y-5">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-24 w-24" />
        <Skeleton className="h-3 w-full" times={6} />
      </div>
    );
  }

  if (error) {
    console.log(error);
    return <p>Something went wrong, check the console for more details.</p>;
  }

  return (
    <>
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4">
        <section className="text-center">
          <h1 className="my-5 text-4xl font-semibold">{data.name}</h1>

          <img
            className="mx-auto mb-5 h-40 w-40 border object-cover shadow-thick"
            src={image.urls.thumb}
            alt={image.alt_description}
          />

          <LoremIpsum length={160} />
        </section>
        <aside className="flex w-full justify-between gap-4">
          <div>
            <h3 className="my-1 text-center text-lg font-semibold">
              Appeared in:
            </h3>

            {data.films.map((item) => (
              <FilmItem key={item} film={item} />
            ))}
          </div>

          <div>
            <h3 className="my-1 text-center text-lg font-semibold">
              General Information
            </h3>
            <DataRow label="Diameter">{data.diameter}</DataRow>
            <DataRow label="Rotation">{data.rotation_period}</DataRow>
            <DataRow label="Orbital">{data.orbital_period}</DataRow>
            <DataRow label="Gravity">{data.gravity}</DataRow>
            <DataRow label="Population">{data.population}</DataRow>
            <DataRow label="Climate">{data.climate}</DataRow>
          </div>
        </aside>
      </div>

      <Link
        to="/"
        className="group mx-auto my-5 flex w-80 items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <span className="ml-4 group-hover:underline">Back Home</span>
      </Link>
    </>
  );
}

export default Starship;
