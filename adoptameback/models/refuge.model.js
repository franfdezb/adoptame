//Creación tabla animales con los datos que mete un usuario
module.exports = (sequelize, Sequelize) => {
    const Refuge = sequelize.define("refuges", {
      refugename: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING,
      },
      userid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
      },
      photo1: {
        type: Sequelize.BLOB
      },
      moreinfo: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      bankaccount: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.INTEGER
      }
    });
    return Refuge;
  };