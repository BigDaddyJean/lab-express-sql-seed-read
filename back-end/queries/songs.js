const db = require("../db/dbConfig");

const allSongs = async (filter) => {
  const { order, is_favorite, by } = filter;

  let query = "SELECT * FROM songs";
  if (is_favorite) query += " WHERE is_favorite = ${is_favorite}";
  if (by) query += " WHERE songs.artist ILIKE ${by}";

  if (order?.toLowerCase() === "asc") query += " ORDER BY name ASC";
  else if (order?.toLowerCase() === "desc") query += " ORDER BY name DESC";

  const songs = await db.any(query, { is_favorite, by });

  return songs;
};

const createSong = async (song) => {
  const { name, artist, album, time, is_favorite } = song;
  const result = await db.one(
    "INSERT INTO songs VALUES(DEFAULT, ${name}, ${artist}, ${album}, ${time}, ${is_favorite}) RETURNING *",
    { name, artist, album, time, is_favorite }
  );

  return result;
};

const deleteSong = async (id) => {
  
    const song = await db.oneOrNone(
      "DELETE FROM songs WHERE id = ${id} RETURNING *",
      { id }
    );
    return song;
  };

const singleSong = async (id) => {
  const song = await db.oneOrNone("SELECT * FROM songs WHERE id = ${id}", {
    id,
  });
  return song;
};

const updateSong = async (song, id) => {

    const { name, artist, album, time, is_favorite } = song;
    
    let query = "UPDATE songs SET ";

    if (name) query += "name = ${name}, ";
    if (artist) query += "artist = ${artist}, ";
    if (album) query += "album = ${album}, ";
    if (time) query += "time = ${time}, ";
    if (typeof is_favorite !== "undefined")
      query += "is_favorite = ${is_favorite}";

    query += " WHERE id = ${id} RETURNING *";

    const result = await db.oneOrNone(query, {
      id,
      name,
      artist,
      album,
      time,
      is_favorite,
    });
    return result;
};

module.exports = { allSongs, createSong, singleSong, updateSong, deleteSong };
