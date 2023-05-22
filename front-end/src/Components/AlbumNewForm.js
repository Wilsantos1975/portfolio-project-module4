import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function AlbumNewForm() {
  let navigate = useNavigate();

  const [album, setAlbum] = useState({
    album_title: "",
    artist: "",
    year: 0,
    condition: "",
    price: 0,
    image: "",
  });

  const addAlbum = (newAlbum) => {
    axios
      .post(`${API}/albums`, newAlbum)
      .then(
        () => {
          navigate(`/albums/;{id}`);
        },
        (error) => console.log(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleChange = (event) => {
    setAlbum({ ...album, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addAlbum(album);
  };

  return (
    <div className="section">
      <div className="container">
        <h1>Selling</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="album_title">Album Title</label>
          <input
            type="text"
            name="album_title"
            id="album_title"
            value={album.album_title}
            onChange={handleChange}
          />
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            name="artist"
            id="artist"
            value={album.artist}
            onChange={handleChange}
          />
          <label htmlFor="year">Year</label>
          <input
            type="number"
            name="year"
            id="year"
            value={album.year}
            onChange={handleChange}
          />
          <label htmlFor="condition">Condition</label>
          <input
            type="text"
            name="condition"
            id="condition"
            value={album.condition}
            onChange={handleChange}
          />

          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={album.price}
            onChange={handleChange}
          />

          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            value={album.image}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
          <Link to={"/albums"}>Cancel</Link>
        </form>
      </div>
    </div>
  );
}

export default AlbumNewForm;
