const { findOne } = require("../model/userModel");

const getOne = async (req, res) => {
  const userId = parseInt(req.params.id, 10);

  try {
    if (isNaN(userId)) {
      throw new Error();
    }
    const [user] = await findOne(userId);
    res.send(user);
  } catch {
    res.sendStatus(500);
  }
};

module.exports = { getOne };
