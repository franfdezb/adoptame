//Creación tabla animales con los datos que mete un usuario
module.exports = (sequelize, Sequelize) => {
    const Sanitary = sequelize.define("sanitaryinfo", {
      animalid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'animals',
            key: 'id'
        }
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
    return Sanitary;
  };