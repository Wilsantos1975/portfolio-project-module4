import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function AlbumEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [album, setAlbum] = useState({
    album_title: "",
    artist: "",
    year: 0,
    condition: "",
    price: 0,
    image: "",
  });

  const updateAlbum = (updatedAlbum) => {
    axios
      .put(`${API}/albums/${id}`, updatedAlbum)
      .then(
        () => {
          navigate(`/albums/${id}`);
        },
        (error) => console.log(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setAlbum({ ...album, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/albums/${id}`)
      .then((response) => {
        setAlbum(response.data);
      })
      .catch((error) => {
        navigate("/404");
      });
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateAlbum(album, id);
  };

  return (
    <div className="section">
      <div className="container">
        <h1>Edit Album</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="album_title">Album Title</label>
          <input
            type="text"
            name="album_title"
            id="album_title"
            value={album.album_title}
            onChange={handleTextChange}
          />
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            name="artist"
            id="artist"
            value={album.artist}
            onChange={handleTextChange}
          />
          <label htmlFor="year">Year</label>
          <input
            type="number"
            name="year"
            id="year"
            value={album.year}
            onChange={handleTextChange}
          />
          <label htmlFor="condition">Condition</label>
          <input
            type="text"
            name="condition"
            id="condition"
            value={album.condition}
            onChange={handleTextChange}
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={album.price}
            onChange={handleTextChange}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            value={album.image}
            onChange={handleTextChange}
          />
          <button type="submit">Update Album</button>
          <Link to={`/albums/${id}`}>Cancel</Link>
        </form>
      </div>
    </div>
  );
}

export default AlbumEditForm;
