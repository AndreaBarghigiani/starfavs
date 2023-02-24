// Components
import DataRow from "../ui/DataRow";
import FavButton from "../ui/FavButton";
import Skeleton from "../ui/Skeleton";
import FilmItem from "../FilmItem";
import VehicleItem from "../VehicleItem";
import PlanetItem from "../PlanetItem";
import StarshipItem from "../StarshipItem";
import LoremIpsum from "../ui/LoremIpsum";

// Redux
import { useRandomPhotoQuery, useFetchDataQuery } from "../../store";

// Router
import { useParams, Link } from "react-router-dom";

const type = "people";
function Person() {
  const { id } = useParams();
  const { data: person, isLoading, error } = useFetchDataQuery({ type, id });

  const {
    data: image,
    isLoading: isLoadingImage,
    errorImage,
  } = useRandomPhotoQuery(`${type}${id}`);

  const films = person
    ? person.films.map((film) => <FilmItem key={film} film={film} />)
    : null;

  const vehicles = person
    ? person.vehicles.map((vehicle) => (
        <VehicleItem key={vehicle} vehicle={vehicle} />
      ))
    : null;

  const starships = person
    ? person.starships.map((starship) => (
        <StarshipItem key={starship} starship={starship} />
      ))
    : null;

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
      {person && image ? (
        <div className="mx-auto flex max-w-xl flex-col items-center">
          <h1 className="my-5 text-center text-4xl font-semibold">
            {person.name}
          </h1>

          <img
            className="mb-5 h-40 w-40 border object-cover shadow-thick"
            src={image.urls.thumb}
            alt={image.alt_description}
          />

          <LoremIpsum length={160} />
          <FavButton person={person} />
        </div>
      ) : null}

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4">
        {person ? (
          <div>
            <h3 className="my-1 text-center text-lg font-semibold">Base</h3>
            <DataRow label="Hair color">{person.hair_color}</DataRow>
            <DataRow label="Eye color">{person.eye_color}</DataRow>
            <DataRow label="Skin color">{person.skin_color}</DataRow>
            <DataRow label="Gender">{person.gender}</DataRow>
            <DataRow label="Mass">{person.mass}</DataRow>
            <PlanetItem planet={person.homeworld} />
          </div>
        ) : null}

        {films?.length ? (
          <div className="movies">
            <h3 className="my-1 text-center text-lg font-semibold">Films</h3>
            {films}
          </div>
        ) : null}

        {vehicles?.length ? (
          <div className="vehicles">
            <h3 className="my-1 text-center text-lg font-semibold">Vehicles</h3>

            {vehicles}
          </div>
        ) : null}

        {starships?.length ? (
          <div className="starships">
            <h3 className="my-1 text-center text-lg font-semibold">
              Starships
            </h3>

            {starships}
          </div>
        ) : null}
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

export default Person;
