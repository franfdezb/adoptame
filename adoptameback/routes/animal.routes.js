const controller = require("../controllers/animal.controller");
module.exports = function(app) {
  app.use("/api/animal", verifyToken, function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/animal/create", controller.createanimal);
  app.get('/animal/:id', controller.searchanimal);
  app.get('/animal/getall/:offset', controller.getallanimals);
  app.put('/api/animal/:id', [verifyAnimalUserid], controller.editanimal);
  app.delete('/api/animal/:id', [verifyAnimalUserid], controller.deleteanimal);
  app.get('/animal/getallbyid/:id', controller.getallrefugeanimals);
  app.get('/animal/getalldogs/:offset', controller.getalldogs);
  app.get('/animal/getallcats/:offset', controller.getallcats);
  app.get('/animal/getallothers/:offset', controller.getallothers);
};