const db = require("./db");

const findOne = async (id) => {
  try {
    const [user] = await db.query("select * from `user` where id = ?", [id]);
    return user;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { findOne };
