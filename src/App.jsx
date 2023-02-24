// Components
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Planets from "./components/pages/Planets";
import Planet from "./components/pages/Planet";
import Starships from "./components/pages/Starships";
import Starship from "./components/pages/Starship";
import People from "./components/pages/People";
import Person from "./components/pages/Person";

// Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="people">
            <Route index element={<People />} />
            <Route path=":id" element={<Person />} />
          </Route>
          <Route path="planets">
            <Route index element={<Planets />} />
            <Route path=":id" element={<Planet />} />
          </Route>
          <Route path="starships">
            <Route index element={<Starships />} />
            <Route path=":id" element={<Starship />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
