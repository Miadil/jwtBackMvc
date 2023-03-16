const Joi = require("joi");

const validateUser = (user, createMod) => {
  const mode = createMod ? "required" : "optional";

  const result = Joi.object({
    name: Joi.string().min(3).max(100).presence(mode),
    email: Joi.string().email().presence(mode),
    password: Joi.string().min(8).max(30).presence(mode),
  })
    .required()
    .min(1) // si un chant minimum pour les autre cas de figure que le post
    .validate(user, { abortEarly: false }).error; // abortEarly permet de continuer a tester tout les chant et a nous faire un rapport d'erreur complet

  if (result) {
    const errorMessages = result.details.map((error) => ({
      message: error.message,
    }));
    return { errorCount: result.details.length, errorMessages };
  }
  return false;
};

module.exports = validateUser;
