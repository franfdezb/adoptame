const db = require("../models");
const Adoptapplication = db.adoptapplication;

exports.createapplication = (req, res) => {
    // Save User to Database
    Adoptapplication.create({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        telephone: req.body.telephone,
        dni: req.body.dni,
        moreinfo: req.body.moreinfo,
        animalid: req.body.animalid
    })
      .then(adoptapplication => {
        res.send({ message: 'Va bien la cosa' });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.getallapplicationsanimal = (req, res) => {

    Adoptapplication.findAll({
      where: {
          animalid: req.params.id
      }
  }).then(animals => res.json(animals))
  }
  
  exports.deleteapplication = (req, res) => {
    Adoptapplication.destroy({
      where: {
          id: req.params.id
      }
  })
  }