import clsx from "clsx";

// Components
import Button from "./Button";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../store";

function FavButton({ person, className }) {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favs);
  const isFavorite = favs.includes(person.url);

  const classes = clsx("scale-90 py-2 px-4 transition-colors", className, {
    "text-slate-400": isFavorite,
  });

  const handleClick = () => {
    if (!isFavorite) {
      dispatch(addFav(person));
    } else {
      dispatch(removeFav(person));
    }
  };

  return (
    <Button className={classes} onClick={handleClick}>
      {isFavorite ? "Remove" : "Favorite"}
    </Button>
  );
}

export default FavButton;
