//Aquí testeamos la autorización para acceder a una página dependiendo
//del rol que tengas.
//HAY QUE TRATAR A LOS USUARIOS SIN LOGEAR AQUÍ Y EN user.controller.js, SE NOS HA OLVIDADO 
  exports.userBoard = (req, res) => {
    res.status(200).send("Eres ROL de usuario. Aquí debe aparecer el contenido destinado al ROL de usuario");
  };
  exports.refugeBoard = (req, res) => {
    res.status(200).send("Eres ROL de refugio. Aquí debe aparecer el contenido destinado al ROL de refugio");
  };
  exports.adminBoard = (req, res) => {
    res.status(200).send("Eres ROL de admin. Aquí debe aparecer el contenido destinado al ROL de admin.");
  };