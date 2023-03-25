const { decodeJWT } = require("../helper/jwtHelper");

const authorization = async (req, res, next) => {
  try {
    // 1
    // const headerBearer = req.headers["authorization"];
    // console.log(req.headers);
    // 2
    const token = req.cookies["auth_token"];
    console.log(token);
    if (!token) throw new Error();
    // 1
    // const [_, token] = headerBearer.split(" ");
    const data = decodeJWT(token);

    req.userId = data.id;
    req.userName = data.name;

    return next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

module.exports = authorization;
