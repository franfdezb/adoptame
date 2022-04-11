//Creación tabla usuarios con los datos que mete un usuario
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      isRefuge: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
    return User;
  };