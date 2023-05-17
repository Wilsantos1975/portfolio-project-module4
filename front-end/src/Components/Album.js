// Desc: Album component
// Path: front-end/src/Components/Album.js
// this file is used to display a single album and to update and delete albums from the database
// it is imported into Albums.js 

function Album({album}) {
  return (
    <div>
      <h3>{album.album_title}</h3>
    </div>
  )
}

export default Album
