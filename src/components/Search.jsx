import { useRef, useState } from "react";

// Components
import Button from "./ui/Button";
import SearchResults from "./pages/SearchResults";

// Redux
import { useSearchAnyQuery } from "../store";

function Search() {
  const inputField = useRef();
  const selectField = useRef();

  const [search, setSearch] = useState({});
  const [skip, setSkip] = useState(true);

  const { data, isFetching, error } = useSearchAnyQuery(search, { skip });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch({
      type: selectField.current.value,
      name: inputField.current.value,
    });

    setSkip(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto flex items-center p-4">
        <label className="mr-2 flex items-center">
          <span className="-indent-[9999px]">Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-1 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            ref={inputField}
            className="bg-transparent p-2 outline-none focus:bg-slate-800"
            placeholder="Search..."
          />
        </label>
        <select className="bg-transparent" ref={selectField}>
          <option value="people">Person</option>
          <option value="planets">Planet</option>
          <option value="starships">Starship</option>
        </select>
        <Button
          onClick={handleSubmit}
          className="ml-4 bg-slate-300 py-2 px-4 text-slate-800"
          disabled={isFetching}
        >
          {isFetching ? "Loading..." : "Search"}
        </Button>
      </form>
      {data && !isFetching ? (
        <div className="relative mb-5 flex flex-col space-y-3 text-center">
          <div className="absolute  left-1/2 z-10 w-96 -translate-x-1/2 transform border bg-slate-700">
            <SearchResults
              type={selectField.current.value}
              results={data.results}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Search;
