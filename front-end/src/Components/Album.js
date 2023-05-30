// Desc: Album component
// Path: front-end/src/Components/Album.js
// this file is used to display a single album and to update and delete albums from the database
// it is imported into Albums.js
import MoreIcon from "@mui/icons-material/More";
import "../styles/styles.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";

function Album({ album }) {
  let navigate = useNavigate();

  const addToCart = () => {
    navigate(`/cart`, { state: { albumId: album } });
  };

  return (
    <CardGroup style={{ width: "200px" }}>
      <Card className="mb-3">
        <Card.Img variant="top" src={album.image} />
        <Card.Body>
          <Card.Title>{album.album_title}</Card.Title>
          <Card.Text>{album.artist}</Card.Text>
          <Card.Text>{album.year}</Card.Text>
          <Card.Text>{album.condition}</Card.Text>
          <Card.Text>{album.price}</Card.Text>

          <div>
            <Link to={`/albums/${album.id}`}>
              <MoreIcon /> Click for details
            </Link>
          </div>
          <Button variant="primary" onClick={addToCart}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </CardGroup>
   
  );
}

export default Album;
