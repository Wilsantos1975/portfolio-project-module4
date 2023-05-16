const db = require("../db/dbConfig");

//index

const getAllAlbums = async (req, res) => {
  try {
    const allAlbums = await db.any("SELECT * FROM records");
    return allAlbums;
  } catch (err) {
    return err;
  }
};

//show

const getAlbum = async (index) => {
  try {
    const oneAlbum = await db.one("SELECT * FROM records WHERE id=$1", index);
    return oneAlbum;
  } catch (error) {
    return error;
  }
};

//create

const createAlbum = async (album) => {
  const { album_title, artist, year, condition, price, image } = album;
  try {
    const newAlbum = await db.one(
      "INSERT INTO records (album_title, artist, year, condition, price, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [album_title, artist, year, condition, price, image]
    );
    return newAlbum;
  } catch (error) {
    return error;
  }
};

//update

const updateAlbum = async (id, album) => {
    const { album_title, artist, year, condition, price, image } = album;
    try {
        const updatedAlbum = await db.one(
        "UPDATE records SET album_title=$1, artist=$2, year=$3, condition=$4, price=$5, image=$6 WHERE id=$7 RETURNING *",
        [album_title, artist, year, condition, price, image, id]
        );
        return updatedAlbum;
    } catch (error) {
        return error;
    }
    }

//delete

const deleteAlbum = async (id) => {
    try {
        const deletedAlbum = await db.one("DELETE FROM records WHERE id=$1 RETURNING *", id);
        return deletedAlbum;
    }
    catch (error) {
        return error;
    }
}


module.exports = { getAllAlbums, getAlbum, createAlbum, updateAlbum, deleteAlbum };