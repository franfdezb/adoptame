const controller = require("../controllers/refuge.controller");
module.exports = function(app) {
  app.use("/api/refuge", verifyToken, function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/refuge/create", controller.createrefuge);
  app.get('/refuge/:id', controller.searchrefuge);
  app.get('/refuge/getall/:offset', controller.getallrefuges);
  app.put('/api/refuge/:id', [verifyRefugeUserid], controller.editrefuge);
  app.delete('/api/refuge/:id',[verifyRefugeUserid], controller.deleterefuge);
};