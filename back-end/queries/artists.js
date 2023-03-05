const { artists } = require("../controllers/artistsController");
const db = require("../db/dbConfig");

const allArtists = async () => {
  const query = "SELECT * FROM artists";
  const results = await db.any(query);

  return results;
};

const createArtist = async (artist) => {
  const { name, age, nationality, genre, gender } = artist;
  await db.none(
    "INSERT INTO artists (name, age, nationality, genre, gender) VALUES(${name}, ${age}, ${nationality}, ${genre}, ${gender})",
    { name, age, nationality, genre, gender }
  );
};

const deleteArtist = async (id) => {
  
    const artist = await db.result(
      "DELETE FROM artists WHERE id = ${id}",
      { id },
      (a) => a.rowCount
    );
    return artist;
};

const singleArtist = async (id) => {
  
    const artist = await db.oneOrNone(
      "SELECT * FROM artists WHERE id = ${id}",
      { id }
    );
    return artist;
};

const updateArtist = async (artist, id) => {
  
    const { name, nationality, age, genre, gender } = artist;
    
    let query = "UPDATE artists SET ";

    if (name) query += "name = ${name}, ";
    if (nationality) query += "nationality = ${nationality}, ";
    if (age) query += "age = ${age}, ";
    if (gender) query += "gender = ${gender} ";

    query += " WHERE id = ${id}";

    const results = await db.result(
      query,
      { id, name, nationality, age, genre, gender },
      (a) => a.rowCount
    );
    return results;
};

module.exports = {
  allArtists,
  createArtist,
  singleArtist,
  updateArtist,
  deleteArtist,
};
