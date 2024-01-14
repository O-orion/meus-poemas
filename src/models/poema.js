'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Poema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Poema.init({
    titulo: DataTypes.STRING,
    poema: DataTypes.STRING,
    dataPublicacao: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Poema',
    tableName: 'poemas'
  });
  return Poema;
};