// this file is used to display all the albums in the database and to create new albums
// it is imported into App.js
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


import Album from "../Components/Album";

const API = process.env.REACT_APP_API_URL;

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/albums`)
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => {
        console.warn("catch", err);
      });
  }, []);

  return (
  
        <div className="albums">
        {albums.map((album) => {
          return <Album key={album.id} album={album} />;
        })}
        </div>

  );
}

export default Albums;
