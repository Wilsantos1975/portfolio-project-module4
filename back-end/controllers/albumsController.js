const express = require("express");
const albums = express.Router();

const {
  getAllAlbums,
  getAlbum,
  createAlbum,
  updateAlbum,
  deleteAlbum,
} = require("../queries/albumsQueries");

//

albums.get("/", async (req, res) => {
  const allAlbums = await getAllAlbums();
  if (allAlbums) {
    res.status(200).json(allAlbums);
  } else {
    res.status(404).json({ error: "No albums found" });
  }
});

//single album

albums.get("/:id", async (req, res) => {
  const { id } = req.params;
  const album = await getAlbum(id);
  if (album) {
    res.status(200).json(album);
  } else {
    res.status(404).json({ error: "Album not found" });
  }
});

//create album

albums.post("/", async (req, res) => {
    const newAlbum = await createAlbum(req.body);
    if (newAlbum) {
        res.status(200).json(newAlbum);
    }
    else {
        res.status(404).json({ error: "Album not created" });
    }
});

//update album
albums.put("/:id", async (req, res) => {    
    const { id } = req.params;
    const album = req.body
    const updatedAlbum = await updateAlbum(id, album);
    if (updatedAlbum) {
        res.status(200).json(updatedAlbum);
    }
    else {
        res.status(404).json({ error: "Album not updated" });
    }
}
);


//delete album
albums.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedAlbum = await deleteAlbum(id);
    if (deletedAlbum) {
        res.status(200).json(deletedAlbum);
    }
    else {
        res.status(404).json({ error: "Album not deleted" });
    }
}
);

module.exports = albums;



