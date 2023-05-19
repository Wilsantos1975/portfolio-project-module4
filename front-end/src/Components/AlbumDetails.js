import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"

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
    }, []);


    
  return (
    <div className="section">
        <div className="container">
            <figure className="image is-48x48">
                <img src={album.image} alt={album.album_title} />
            </figure>

<h3 className="title is-3">{album.album_title}</h3>
<h4 className="subtitle is-4">{album.artist}</h4>
<h5 className="subtitle is-5">{album.price}</h5>

<div className="buttons">
    <div className="container">
        <Link to={`/albums`}> Back to Albums</Link>
    </div>
</div>


      </div>
    </div>
  )
}

export default AlbumDetails
