import { Link } from "react-router-dom";
import { Trash } from 'phosphor-react'
import React from "react";

function CartItem({album}) {
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <figure className="image is-128x128">
                  <img src={album.image} alt="album" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{album.album_title}</p>
                    <p className="subtitle is-6">
                      <strong>{album.artist}</strong>
                    </p>
                    <p className="subtitle is-6">
                      <strong>Release: </strong>
                      {album.year}
                    </p>
                    <p className="subtitle is-6">
                      <strong>Condition:</strong>
                      {album.condition}
                    </p>
                    <p className="subtitle is-6">
                      <strong>Price: $</strong>
                      {album.price}
                    </p>
                  </div>
                </div>

                <div>
                    <button className="button is-black">
                    <Link to="/albums">Back to Albums</Link>
                    </button>

                  
                  <Trash size={24} weight="bold" />
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
