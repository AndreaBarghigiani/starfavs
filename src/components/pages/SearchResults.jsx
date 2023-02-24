import { returnId } from "../../utils/string";

// Router
import { Link } from "react-router-dom";

function SearchResults({ type, results }) {
  return (
    <>
      {results.map((item) => (
        <div className="border-b p-2 transition-colors hover:bg-slate-800">
          <Link className="block" to={`${type}/${returnId(item.url)}`}>
            {item.name}
          </Link>
        </div>
      ))}
    </>
  );
}

export default SearchResults;
