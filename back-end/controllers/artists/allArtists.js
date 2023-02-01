const db = require("../../db");

const allArtists = async (req, res) => {
  try {
    const query = "SELECT * FROM artist";
    const results = await db.any(query);

    res.json(results);
  } catch(err) {
    console.error(err)
    return res.status(500).json({message: "something went wrong"})
  }
}

module.exports = allArtists
