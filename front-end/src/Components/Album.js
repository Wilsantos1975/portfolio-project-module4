// Desc: Album component
// Path: front-end/src/Components/Album.js
// this file is used to display a single album and to update and delete albums from the database
// it is imported into Albums.js
import MoreIcon from '@mui/icons-material/More';
import "../styles/styles.css";
import { Link } from "react-router-dom";

function Album({ album }) {
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <div class="card">
              <div class="card-image">
                <figure class="image is-128x128">
                  <img src={album.image} alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{album.album_title}</p>
                    <p class="subtitle is-6">
                      <strong>{album.artist}</strong>
                    </p>
                    <p class="subtitle is-6">
                      <strong>Release: </strong>
                      {album.year}
                    </p>
                    <p class="subtitle is-6">
                      <strong>Condition:</strong>
                      {album.condition}
                    </p>
                    <p class="subtitle is-6">
                      <strong>Price: $</strong>
                      {album.price}
                    </p>
                  </div>
                </div>

                <div>
                  <Link to={`/albums/${album.id}`}><MoreIcon /> 
            
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Album;
//   <div className="section">
//     <div className="container ">
//       <div className="card">
//         <div className="card-image">
//           <figure className="image" style={{width:"100px"}}>
//             <img src={album.image} alt="Placeholder image" />
//           </figure>
//         </div>
//         <div className="card-content">
//           <div className="media">
//             <div className="media-left">
//               <figure className="image is-48x48">
//                 <img src={album.image} alt="Placeholder image" />
//               </figure>
//             </div>
//             <div className="media-content">
//               <p className="title is-4">{album.artist}</p>
//               <p className="subtitle is-6">{album.condition}</p>
//             </div>
//           </div>

//           <div className="content">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Phasellus nec iaculis mauris. <a>@bulmaio</a>.
//             <a href="#">#css</a> <a href="#">#responsive</a>
//             <br />
//             <time dateTime="2016-01-01">11:09 PM - 1 Jan 2016</time>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
