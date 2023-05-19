import { Route, Routes } from "react-router-dom";
import bulma from "bulma/css/bulma.css";
import Home from "./Pages/Home";

import NavBar from "./Components/NavBar";
import Index from "./Pages/Index.js";
import ShowAlbum from "./Pages/ShowAlbum";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Index />} />
          <Route path="/albums/:id" element={<ShowAlbum />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
