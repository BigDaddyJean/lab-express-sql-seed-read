const db = require("../../db");

const createArtist = async (req, res) => {
  try {
    const { name, age, nationality, genre, gender } = req.body;
    await db.none(
      "INSERT INTO artist (name, age, nationality, genre, gender) VALUES(${name}, ${age}, ${nationality}, ${genre}, ${gender})",
      {name, age, nationality, genre, gender}
    );

    return res.json();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = createArtist;
