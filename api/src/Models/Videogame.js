const { DataTypes } = require('sequelize');
const { UUID, STRING, TEXT, INTEGER , ARRAY, UUIDV4, JSON} = DataTypes


module.exports = (sequelize) => {
  
  sequelize.define('videogame', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        unique: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    description_raw: {
      type: TEXT,
      allowNull: false,
    },
    release: {
      type: STRING,
    },
    rating: {
      type: STRING,
    },
    platforms: {
      type: ARRAY(JSON),
      allowNull: false,
    },
    background_image: {
      type: STRING
    },
    _genre: {
      type: ARRAY(JSON),
    }
  })
};
