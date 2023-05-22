// this file is used to display all the albums in the database and to create new albums
// it is imported into App.js

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
        console.log(res.data);
        setAlbums(res.data);
      })
      .catch((err) => {
        console.warn("catch", err);
      });
  }, []);

  return (
    
        <div className="section">
          <div className="container">
          
          {albums.map((album) => {
            return <Album key={album.id} album={album} />;
          })}
        </div>
    </div>
  );
}

export default Albums;
