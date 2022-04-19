const { DataTypes } = require('sequelize');
const { STRING } = DataTypes


module.exports = (sequelize) => {

  sequelize.define('platform', {
    name: {
      type: STRING,
      allowNull: false,
    },
    img: {
      type: STRING,
    }
  });
  

};