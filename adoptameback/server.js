const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// database
const db = require("./models");
const Role = db.role;

// db.sequelize.sync();
// force: true will drop the table if it already exists
//initial();
db.sequelize.sync();


// simple route
app.get("/", (req, res) => {
  res.json({ mensaje: "Hola mundo adoptame!" });
});
// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/animal.routes')(app);
require('./routes/refuge.routes')(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//IMPORTANTE FOTO QUE ENVIO POR EL GRUPO DE WA
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "refuge"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}