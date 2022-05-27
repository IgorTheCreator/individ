'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PC extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Cabinet, {foreignKey: 'pcId', as: 'Cabinet'});
    }
  }
  PC.init({
    opVolume: DataTypes.INTEGER,
    presenceOfAVideoСard: DataTypes.BOOLEAN,
    cpu: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PC',
  });
  return PC;
};