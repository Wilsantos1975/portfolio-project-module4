import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";

import NavBar from "./Components/NavBar";
import Index from "./Pages/Index.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Index />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
