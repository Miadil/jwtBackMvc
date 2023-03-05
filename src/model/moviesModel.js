const db = require("./db");

const findAll = async () => {
  //   return db.query("select * from `movie`")
  try {
    const [movies] = await db.query("select * from `movie`");
    return movies;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { findAll };
