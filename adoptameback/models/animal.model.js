//Creación tabla animales con los datos que mete un usuario
module.exports = (sequelize, Sequelize) => {
    const Animal = sequelize.define("animals", {
      weight: {
        type: Sequelize.STRING
      },
      raze: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
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
      address: {
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
      photo1: {
        type: Sequelize.BLOB
      },
      photo2: {
        type: Sequelize.BLOB
      },
      vaccinated: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      dewormed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      sterilized: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      microchip: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
    return Animal;
  };