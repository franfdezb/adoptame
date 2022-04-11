//En los archivos de la carpeta routes, lo que hacemos es determinar qué sucede
//(es decir, qué funciones o que pasos se toman) cuando realizamos una petición
//HTTP (ya sea GET, POST,...)
const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(     //Aquí por ejemplo, cuando realizamos un POST a "/api/auth/signup" se ejecuta lo de abajo
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail
    ],
    controller.signup
  );
  app.post("/api/auth/signin", controller.signin);
};