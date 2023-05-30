import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MoreIcon from "@mui/icons-material/More";

const API = process.env.REACT_APP_API_URL;

function AlbumDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [album, setAlbum] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/albums/${id}`)
      .then((res) => {
        setAlbum(res.data);
      })
      .catch((err) => {
        console.warn("catch", err);
      });
  }, [id]);

  const deleteAlbum = () => {
    axios
      .delete(`${API}/albums/${id}`)
      .then(() => {
        navigate(`/albums`);
      })
      .catch((err) => {
        console.warn("catch", err);
      });
  };

  return (


<Card className="mb-3" style={{ width: "20rem" }}>
  <Card.Img variant="top" src={album.image} />
  <Card.Body>
    <Card.Title>{album.album_title}</Card.Title>
    <Card.Text>{album.artist}</Card.Text>
    <Card.Text>{album.year}</Card.Text>
    <Card.Text>{album.condition}</Card.Text>
    <Card.Text>{album.price}</Card.Text>

    <div>
      <Link to={`/albums/${album.id}/edit`}>
        <MoreIcon /> Edit
      </Link>
    </div>
    <Button variant="primary" onClick={deleteAlbum}>Delete</Button>
  </Card.Body>
</Card>







    // <div className="section">
    //   <div className="container">
    //     <div className="columns">
    //       <div className="column is-one-third">
    //         <div className="card">
    //           <div className="card-image">
    //             <figure className="image is-128x128">
    //               <img src={album.image} alt="album" />
    //             </figure>
    //           </div>
    //           <div className="card-content">
    //             <div className="media">
    //               <div className="media-content">
    //                 <h1 className="title is-4">{album.album_title}</h1>
    //                 <h2 className="subtitle is-6">
    //                   <strong>{album.artist}</strong>
    //                 </h2>
    //                 <p className="subtitle is-6">
    //                   <strong>Release: </strong>
    //                   {album.year}
    //                 </p>
    //                 <p className="subtitle is-6">
    //                   <strong>Condition:</strong>
    //                   {album.condition}
    //                 </p>
    //                 <p className="subtitle is-6">
    //                   <strong>Price: $</strong>
    //                   {album.price}
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="card">
    //               <footer className="card-footer">
    //                 <Link to={`/albums`} className="button is-black">
    //                   Back
    //                 </Link>
    //                 <Link
    //                   to={`/albums/${album.id}/edit`}
    //                   className="button is-black"
    //                 >
    //                   Edit
    //                 </Link>
    //                 <button className="button is-black" onClick={deleteAlbum}>
    //                   Delete
    //                 </button>
    //               </footer>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    
  );
}

export default AlbumDetails;
