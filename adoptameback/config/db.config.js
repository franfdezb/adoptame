//Conexión con la BD
module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "postgres",
    DB: "adopciones",
    dialect: "postgres", //Probamos esto
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};