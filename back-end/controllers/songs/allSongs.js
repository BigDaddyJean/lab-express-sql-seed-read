const db = require("../../db");

const allSongs = async (req, res) => {
  try {
    const {order, is_favorite, by} = req.query;

    let query = "SELECT * FROM song";
    if (is_favorite) query += ' WHERE is_favorite = ${is_favorite}';
    if (by) query += ' WHERE song.artist ILIKE ${by}';

    if (order?.toLowerCase() === 'asc') query += ' ORDER BY name ASC';
    else if (order?.toLowerCase() === 'desc') query += ' ORDER BY name DESC';

    const songs = await db.any(query, {is_favorite, by});

    res.json(songs);
  } catch(err) {
    console.error(err)
    return res.status(500).json({message: "something went wrong"})
  }
}

module.exports = allSongs
