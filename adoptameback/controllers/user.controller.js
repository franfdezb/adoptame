//Aquí testeamos la autorización para acceder a una página dependiendo
//del rol que tengas.
//HAY QUE TRATAR A LOS USUARIOS SIN LOGEAR AQUÍ Y EN user.controller.js, SE NOS HA OLVIDADO 

const db = require("../models");
const User = db.user;

  exports.userBoard = (req, res) => {
    res.status(200).send("Eres ROL de usuario. Aquí debe aparecer el contenido destinado al ROL de usuario");
  };
  exports.refugeBoard = (req, res) => {
    res.status(200).send("Eres ROL de refugio. Aquí debe aparecer el contenido destinado al ROL de refugio");
  };
  exports.adminBoard = (req, res) => {
    res.status(200).send("Eres ROL de admin. Aquí debe aparecer el contenido destinado al ROL de admin.");
  };

  exports.searchuser = (req, res) => {

    User.findOne({ where: { id: req.params.id }}).then(data => {
        res.send(data);
    });
  }
  
  exports.edituser = (req, res) => {

    User.update(
      { refugeid: req.body.refugeid, },
      { where: { id: req.params.id } }
    )
      .then(result =>
        res.send({ message: 'Usuario editado con éxito' })
      )
      .catch(err =>
        res.status(500).send({ message: err.message })
      )
  }