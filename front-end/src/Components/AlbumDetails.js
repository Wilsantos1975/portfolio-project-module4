import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function AlbumDetails() {
  const { id } = useParams();

  const [album, setAlbum] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/albums/${id}`)
      .then((res) => {
        console.log(res.data);
        setAlbum(res.data);
      })
      .catch((err) => {
        console.warn("catch", err);
      });
  }, [id]);

  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <div className="card">
              <div className="card-image">
                <figure className="image is-128x128">
                  <img src={album.image} alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <h1 className="title is-4">{album.album_title}</h1>
                    <h2 className="subtitle is-6">
                      <strong>{album.artist}</strong>
                    </h2>
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
                <div className="card">
                  <footer className="card-footer">
                   <Link to={`/albums`} className="button is-black">Back</Link>
                   <Link to={`/albums/${album.id}/edit`} className="button is-black">Edit</Link>
                   <button className="button is-black">Delete</button>

                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    //     <div className="section">
    //         <div className="container">
    //             <figure className="image is-48x48">
    //                 <img src={album.image} alt={album.album_title} />
    //             </figure>

    // <h3 className="title is-3">{album.album_title}</h3>
    // <h4 className="subtitle is-4">{album.artist}</h4>
    // <h5 className="subtitle is-5">{album.price}</h5>

    // <div className="buttons">
    //     <div className="container">
    //         <Link to={`/albums`}> Back to Albums</Link>
    //     </div>
    // </div>

    //       </div>
    //     </div>
  );
}

export default AlbumDetails;
