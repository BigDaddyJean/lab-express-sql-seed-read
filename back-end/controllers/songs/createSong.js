const db = require("../../db");

const createSong = async (req, res) => {
  try {
    const { name, artist, album, time, is_favorite } = req.body;
    await db.none(
      "INSERT INTO song VALUES(DEFAULT, ${name}, ${artist}, ${album}, ${time}, ${is_favorite})",
      {name, artist, album, time, is_favorite}
    );

    return res.json();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = createSong;
