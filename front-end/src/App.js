import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import React from "react";
import NavBar from "./Components/NavBar";
import Index from "./Pages/Index.js";
import ShowAlbum from "./Pages/ShowAlbum";
import NewAlbum from "./Pages/NewAlbum";
import EditAlbum from "./Pages/EditAlbum";
import FourZeroFour from "./Pages/FourZeroFour";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/albums" element={<Index />} />
          <Route path="/albums/:id" element={<ShowAlbum />} />
          <Route path="/albums/new" element={<NewAlbum />} />
          <Route path="/albums/:id/edit" element={<EditAlbum />} />
          <Route path="*" element={<FourZeroFour/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
