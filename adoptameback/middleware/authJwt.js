//Aquí verificamos el token de inicio de sesión y creamos las "reglas" que
//definen el poder entrar o no en una página dependiendo de tu rol
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};
isRefuge = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "refuge") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Se requiere el rol de refugio para acceder a este contenido"
      });
      return;
    });
  });
};
isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Se requiere el rol de administrador para acceder a este contenido"
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isRefuge: isRefuge,
  isAdmin: isAdmin
};
module.exports = authJwt;