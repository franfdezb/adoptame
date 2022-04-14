//Creación tabla animales con los datos que mete un usuario
module.exports = (sequelize, Sequelize) => {
    const Refuge = sequelize.define("refuges", {
      name: {
        type: Sequelize.INTEGER
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
      verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      city: {
        type: Sequelize.STRING
      },
      postalcode: {
        type: Sequelize.INTEGER,
      }
    });
    return Refuge;
  };