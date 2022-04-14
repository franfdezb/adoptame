//Creación tabla animales con los datos que mete un usuario
module.exports = (sequelize, Sequelize) => {
    const Animal = sequelize.define("animals", {
      weight: {
        type: Sequelize.INTEGER
      },
      raze: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      specie: {
        type: Sequelize.STRING
      },
      adoptionStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      refugeid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'refuges',
            key: 'id'
        }
      },
      userid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
      },
      moreinfo: {
        type: Sequelize.STRING
      },
      photos: {
        type: Sequelize.STRING
      }
    });
    return Animal;
  };