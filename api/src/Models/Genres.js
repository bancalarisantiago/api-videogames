const { DataTypes } = require('sequelize');
const { STRING } = DataTypes


module.exports = (sequelize) => {

  sequelize.define('genre', {
    name: {
      type: STRING,
      allowNull: false,
    }
  });

};
