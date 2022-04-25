const controller = require("../controllers/animal.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/animal/create", controller.createanimal);
  app.get('/api/animal/:id', controller.searchanimal);
  app.get('/api/animal/getall/:offset', controller.getallanimals);
  app.put('/api/animal/:id', controller.editanimal);
  app.delete('/api/animal/:id', controller.deleteanimal);
  app.get('/api/animal/getallbyid/:id', controller.getallrefugeanimals);
};