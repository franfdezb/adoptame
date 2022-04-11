//Aquí exportamos los métodos que contienen 'authJwt' y 'verifySignup' para
//que puedan ser llamados y usados en otras clases y carpetas
const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");
module.exports = {
  authJwt,
  verifySignUp
};