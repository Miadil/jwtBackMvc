const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCoast: 5,
  parallelism: 1,
};

//plainPassword c'est le mots de passe comme il a etait envoyer du front
//permet de hasher le password
const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOptions);
};

//permet de verifier que le password correspond dans la bdd
const verifyPassword = (plainPassword, hashPassword) => {
  return argon2.verify(plainPassword, hashPassword, hashingOptions);
};

module.exports = { hashPassword, verifyPassword };
