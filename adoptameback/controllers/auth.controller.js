//Aquí se hacen todas las acciones que tienen que ver directamente con
//el registro y el login (creación del usuario en la BD, comprobar usuario
//o email duplicado, comprobar si el usuario es refugio para darle ese rol,...)
const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    name: req.body.name,
    surname: req.body.surname,
    isRefuge: req.body.isRefuge
  })
    .then(user => {
        //Si la casilla de isRefuge esta marcada
      if (req.body.isRefuge == 1) {
          user.setRoles([1, 2]).then(() => { //Tendrá roles de usuario y de refugio
            res.send({ message: "User was registered successfully!" });
          });
      } else {
        // user role = 1, es decir, solo tendrá rol de usuario
        user.setRoles([1]).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "No se ha encontrado el usuario" });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Contraseña incorrecta"
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};