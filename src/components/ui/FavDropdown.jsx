// Compoonents
import { Menu } from "@headlessui/react";
import FavRow from "./FavRow";

// Redux
import { useSelector } from "react-redux";

function FavDropdown() {
  const favs = useSelector((state) => state.favs);

  return (
    <Menu as="div" className="relative ml-5 text-center">
      <Menu.Button className="border border-slate-300 py-1 px-3">
        {favs.length}
      </Menu.Button>

      <Menu.Items className="absolute right-0 w-56 origin-top-right text-right">
        {favs.map((url) => (
          <Menu.Item key={url}>
            <FavRow url={url} />
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}

export default FavDropdown;
