import "./App.scss";

import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import Characters from "./components/pages/Characters/Characters.js";
import Episodes from "./components/pages/Episodes/Episodes.js";
import Locations from "./components/pages/Locations/Locations.js";

import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
  ErrorBoundary,
} from "react-router-dom";

function App() {
  return (
    <div className="App mx-5">
      <Navbar />
      <div className="pages max-w-screen-lg mx-auto">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/characters" element={<Characters />}>
            <Route path=":charid" element={<Characters />} />
          </Route>
          <Route path="/episodes" element={<Episodes />}>
            <Route path=":episodeid" element={<Episodes />} />
          </Route>
          <Route path="/locations" element={<Locations />}>
            <Route path=":locationid" element={<Locations />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
