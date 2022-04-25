const db = require("../models");
const Refuge = db.refuge;

exports.createrefuge = (req, res) => {
    // Save User to Database
    Refuge.create({
        refugename : req.body.refugename,
        address : req.body.address,
        city : req.body.city,
        email : req.body.email,
        bankaccount : req.body.bankaccount,
        moreinfo : req.body.moreinfo,
        userid : req.body.userid,
        photo1 : req.body.photo1,
        telephone : req.body.telephone
    })
      .then(refuge => {
        res.send({ message: refuge.id });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.searchrefuge = (req, res) => {

    Refuge.findOne({ where: { id: req.params.id }}).then(data => {
        res.send(data);
    });
  }

  exports.getallrefuges = (req, res) => {

    Refuge.findAll({
      limit: 15,
      offset: req.params.offset
    }).then(refuges => res.json(refuges))
  }

  exports.editrefuge = (req, res) => {

    Refuge.update(
      { refugename : req.body.refugename,
        address : req.body.address,
        city : req.body.city,
        email : req.body.email,
        bankaccount : req.body.bankaccount,
        moreinfo : req.body.moreinfo,
        userid : req.body.userid,
        photo1 : req.body.photo1,
        telephone : req.body.telephone },
      { where: { id: req.params.id } }
    )
      .then(result =>
        res.send({ message: 'Refugio editado con éxito' })
      )
      .catch(err =>
        res.status(500).send({ message: err.message })
      )
  }

exports.deleterefuge = (req, res) => {
  Refuge.destroy({
    where: {
        id: req.params.id
    }
})
}