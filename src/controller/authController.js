const { findByEmail } = require("../model/userModel");

const { verifyPassword } = require("../helper/argonHelper");
const { encodeJWT } = require("../helper/jwtHelper");
const validateLogin = require("../validator/loginValidator");

const login = async (req, res) => {
  try {
    // const { name, email, password } = req.body; //problem on
    // fais confiance au donner cree par l'utilisateur nous devont verifer les data avec joi
    const errors = validateLogin(req.body);
    if (errors) {
      return res.status(401).send(errors);
    }
    const [user] = await findByEmail(req.body.email);
    if (!user) {
      return res.status(401).send("Invalid Credentials");
    }

    const passwordVerification = await verifyPassword(
      user.password,
      req.body.password
    );

    if (!passwordVerification) {
      return res.status(401).send("Invalid Credentials");
    }

    delete user.password;

    const token = encodeJWT(user);

    res.status(201).json({ token });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const logout = async (req, res) => {};

module.exports = { login, logout };
