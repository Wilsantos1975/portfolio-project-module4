import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

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

  const handleTextChange = (event) => {
    setAlbum({ ...album, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addAlbum(album);
    navigate(`/albums`);
  };

  return (

      
    <Form className="container" onSubmit={handleSubmit} style={{width: "30%"}}>
    <div className="title">
      <h1>Post an Album</h1>
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
            Submit{" "}
          </Button>
      

        <Link to={"/albums"} className="button">
          <Button>Cancel</Button>
        </Link>
      </Form.Group>
    </Form>
  );
}

//       <div className="container">
//         <h1>Post an Album</h1>

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

//          <Link></Link> <button type="submit" className="button">Submit </button>
//           <Link to={"/albums"} className="button">Cancel </Link>
//         </form>
//       </div>

//   );
// }

export default AlbumNewForm;
