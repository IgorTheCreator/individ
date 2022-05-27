'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cabinet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cabinet.init({
    number: DataTypes.INTEGER,
    pcId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cabinet',
  });
  return Cabinet;
};