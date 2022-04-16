const db = require("../models");
const Animal = db.animal;

exports.createanimal = (req, res) => {
    // Save User to Database
    Animal.create({
      weight: req.body.weight,
      raze: req.body.raze,
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      size: req.body.size,
      specie: req.body.specie,
      adoptionStatus: req.body.adoptionStatus,
      refugeid: req.body.refugeid,
      userid: req.body.userid,
      moreinfo: req.body.moreinfo,
      photo1: req.body.photo1,
      photo2: req.body.photo2,
      vaccinated: req.body.vaccinated,
      dewormed: req.body.dewormed,
      sterilized: req.body.sterilized,
      microchip: req.body.microchip,
    })
      .then(animal => {
        res.send({ message: "Animal creado con éxito" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.searchanimal = (req, res) => {

    Animal.findOne({ where: { id: req.params.id }}).then(data => {
        res.send(data);
    });
  }