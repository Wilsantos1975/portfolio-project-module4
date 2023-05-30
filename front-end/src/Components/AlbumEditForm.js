import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

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

<Form className="container" onSubmit={handleSubmit} style={{width: "30%"}}>
    <div className="title">
      <h1>Edit your Album</h1>
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Album Title</Form.Label>
        <Form.Control
          type="text"
          name="album_title"
          id="album_title"
          value={album.album_title}
          onChange={handleTextChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Artist</Form.Label>
        <Form.Control
          type="text"
          name="artist"
          id="artist"
          value={album.artist}
          onChange={handleTextChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Year</Form.Label>
        <Form.Control
          type="number"
          name="year"
          id="year"
          value={album.year}
          onChange={handleTextChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Condition</Form.Label>
        <Form.Control
          type="text"
          name="condition"
          id="condition"
          value={album.condition}
          onChange={handleTextChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          id="price"
          value={album.price}
          onChange={handleTextChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="text"
          name="image"
          id="image"
          value={album.image}
          onChange={handleTextChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
          <Button type="submit" className="button">
            Update Album{" "}
          </Button>
      

        <Link to={`/albums/${id}`} className="button">
          <Button>Cancel</Button>
        </Link>
      </Form.Group>
    </Form>







//     <div className="section">
//       <div className="container">
        

//         <form onSubmit={handleSubmit}>
//           <div className="field">
//             <label htmlFor="album_title">Album Title </label>
//             <input
//               type="text"
//               name="album_title"
//               id="album_title"
//               value={album.album_title}
//               onChange={handleTextChange}
//             />
//           </div>

//           <div className="field">
//             <label htmlFor="artist">Artist </label>
//             <input
//               type="text"
//               name="artist"
//               id="artist"
//               value={album.artist}
//               onChange={handleTextChange}
//             />
//           </div>

// <div className="field">

//           <label htmlFor="year">Year </label>
//           <input
//             type="number"
//             name="year"
//             id="year"
//             value={album.year}
//             onChange={handleTextChange}
//           />
// </div>

// <div className="field">
//           <label htmlFor="condition">Condition </label>
//           <input
//             type="text"
//             name="condition"
//             id="condition"
//             value={album.condition}
//             onChange={handleTextChange}
//           />
// </div>
// <div className="field">
//           <label htmlFor="price">Price </label>
//           <input
//             type="number"
//             name="price"
//             id="price"
//             value={album.price}
//             onChange={handleTextChange}
//           />
// </div>
// <div className="field">
//           <label htmlFor="image">Image </label>
//           <input
//             type="text"
//             name="image"
//             id="image"
//             value={album.image}
//             onChange={handleTextChange}
//           />
// </div>
//           <button type="submit">Update Album</button>
//           <Link to={`/albums/${id}`}>Cancel</Link>
//         </form>
//       </div>
//     </div>
  );
}

export default AlbumEditForm;
