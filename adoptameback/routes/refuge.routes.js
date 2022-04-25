const controller = require("../controllers/refuge.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/refuge/create", controller.createrefuge);
  app.get('/api/refuge/:id', controller.searchrefuge);
  app.get('/api/refuge/getall/:offset', controller.getallrefuges);
  app.put('/api/refuge/:id', controller.editrefuge);
  app.delete('/api/refuge/:id', controller.deleterefuge);
};