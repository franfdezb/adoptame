module.exports = (sequelize, Sequelize) => {
    const Adoptapplication = sequelize.define("adoptapplications", {
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.STRING
      },
      dni: {
        type: Sequelize.STRING
      },
      moreinfo: {
        type: Sequelize.STRING
      },
      animalid: {
        type: Sequelize.INTEGER
      }
    });
    return Adoptapplication;
  };