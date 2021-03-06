const controller = require("../controllers/adoptapplication.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/adoptapplication/create", controller.createapplication);
  app.get('/api/adoptapplication/getallbyid/:id', [verifyToken, verifyAnimalUserid], controller.getallapplicationsanimal);
  app.delete('/api/adoptapplication/:id', controller.deleteapplication);
};